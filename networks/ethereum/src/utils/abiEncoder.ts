import { keccak256 } from 'js-sha3';

function leftPadZeros(value: string, length: number): string {
  return value.padStart(length, '0');
}

function toHex(value: number | bigint | string): string {
  if (typeof value === 'number' || typeof value === 'bigint') {
    return value.toString(16);
  } else if (typeof value === 'string') {
    if (value.startsWith('0x')) {
      return value.slice(2);
    } else {
      const num = BigInt(value);
      return num.toString(16);
    }
  } else {
    throw new Error(`Cannot convert value=${value} to hex`);
  }
}

function encodeUint256(value: number | bigint | string): string {
  let hexValue = toHex(value);
  hexValue = leftPadZeros(hexValue, 64);
  return hexValue;
}

function encodeBoolean(value: boolean): string {
  return leftPadZeros(value ? '1' : '0', 64);
}

function encodeAddress(addr: string): string {
  const without0x = addr.replace(/^0x/i, '');
  return leftPadZeros(without0x.toLowerCase(), 64);
}


interface EncodedParameter {
  headLength: number;

  encodeHead(offsetInBytes: number): string;

  encodeTail(): string;
}

function encodeSingleParameter(type: string, value: any): EncodedParameter {
  const arrayMatch = type.match(/^(.*)\[(.*?)\]$/);
  if (arrayMatch) {
    const baseType = arrayMatch[1];
    const lengthInType = arrayMatch[2];

    if (lengthInType === '') {
      return encodeDynamicArray(baseType, value);
    } else {
      const fixedLen = parseInt(lengthInType, 10);
      return encodeFixedArray(baseType, fixedLen, value);
    }
  }

  if (type.startsWith('bytes')) {
    const match = type.match(/^bytes([0-9]+)$/);
    if (match) {
      // bytesN (1 <= N <= 32)
      const n = parseInt(match[1]);
      return encodeFixedBytes(value, n);
    } else {
      return encodeDynamicBytes(value);
    }
  }

  if (type === 'string') {
    return encodeDynamicString(value);
  }

  if (type === 'bool') {
    const headVal = encodeBoolean(Boolean(value));
    return {
      headLength: 32,
      encodeHead: () => headVal,
      encodeTail: () => '',
    };
  }

  if (type === 'address') {
    const headVal = encodeAddress(value);
    return {
      headLength: 32,
      encodeHead: () => headVal,
      encodeTail: () => '',
    };
  }

  if (/^(u?int)([0-9]*)$/.test(type)) {
    const headVal = encodeUint256(value);
    return {
      headLength: 32,
      encodeHead: () => headVal,
      encodeTail: () => '',
    };
  }

  throw new Error(`Unsupported or unrecognized type: ${type}`);
}

function encodeDynamicBytes(raw: string | Uint8Array): EncodedParameter {
  let byteArray: Uint8Array;
  if (typeof raw === 'string') {
    if (raw.startsWith('0x')) {
      const hex = raw.slice(2);
      const arr = hex.match(/.{1,2}/g)?.map((b) => parseInt(b, 16)) ?? [];
      byteArray = new Uint8Array(arr);
    } else {
      byteArray = new TextEncoder().encode(raw);
    }
  } else {
    byteArray = raw;
  }

  const lengthHex = encodeUint256(byteArray.length);
  const dataHex = Buffer.from(byteArray).toString('hex');
  const mod = dataHex.length % 64;
  const padLength = mod === 0 ? 0 : 64 - mod;

  const tailHex = dataHex + '0'.repeat(padLength);

  return {
    headLength: 32,
    encodeHead: (offsetInBytes: number) => {
      const offsetHex = leftPadZeros(offsetInBytes.toString(16), 64);
      return offsetHex;
    },
    encodeTail: () => {
      // [length(32bytes)] + [data(N bytes + padding)]
      return lengthHex + tailHex;
    },
  };
}

function encodeDynamicString(text: string): EncodedParameter {
  return encodeDynamicBytes(text);
}

function encodeDynamicArray(baseType: string, arr: any[]): EncodedParameter {
  const encodedItems = arr.map((item) => encodeSingleParameter(baseType, item));
  return {
    headLength: 32,
    encodeHead: (offsetInBytes: number) => {
      const offsetHex = leftPadZeros(offsetInBytes.toString(16), 64);
      return offsetHex;
    },
    encodeTail: () => {
      let tail = encodeUint256(arr.length);
      let totalHeadLength = 32 * arr.length;
      const encodedHeads: string[] = [];
      const encodedTails: string[] = [];

      let currentOffset = 32 * arr.length;

      for (let i = 0; i < encodedItems.length; i++) {
        const enc = encodedItems[i];
        // head
        const headHex = enc.encodeHead(currentOffset);
        encodedHeads.push(headHex);

        // tail
        const tailHex = enc.encodeTail();
        encodedTails.push(tailHex);

        const tailBytes = tailHex.length / 2; // 2 hex = 1 byte
        currentOffset += tailBytes;
      }

      tail += encodedHeads.join('');
      tail += encodedTails.join('');
      return tail;
    },
  };
}


function encodeFixedArray(baseType: string, length: number, arr: any[]): EncodedParameter {
  if (arr.length !== length) {
    throw new Error(`Fixed array length mismatch: expect ${length}, got ${arr.length}`);
  }
  const encodedItems = arr.map((item) => encodeSingleParameter(baseType, item));

  let totalHeadLength = 0;
  for (const enc of encodedItems) {
    totalHeadLength += enc.headLength;
  }

  return {
    headLength: totalHeadLength,
    encodeHead: (offsetInBytes: number) => {
      let heads = '';
      let currentOffset = 0;
      for (const enc of encodedItems) {
        const headHex = enc.encodeHead(offsetInBytes + totalHeadLength + currentOffset);
        heads += headHex;
        currentOffset += enc.encodeTail().length / 2;
      }
      return heads;
    },
    encodeTail: () => {
      let tails = '';
      for (const enc of encodedItems) {
        tails += enc.encodeTail();
      }
      return tails;
    },
  };
}


function encodeFixedBytes(value: string, length: number): EncodedParameter {
  let hex = value.replace(/^0x/i, '');
  const maxLen = length * 2; // N bytes => 2*N hex
  if (hex.length > maxLen) {
    hex = hex.slice(0, maxLen);
  } else if (hex.length < maxLen) {
    hex = hex.padEnd(maxLen, '0');
  }
  hex = hex.padEnd(64, '0');

  return {
    headLength: 32,
    encodeHead: () => hex,
    encodeTail: () => '',
  };
}

export function encodeParameters(types: string[], values: any[]): string {
  if (types.length !== values.length) {
    throw new Error('Types count and values count do not match');
  }

  const encodedList = types.map((t, i) => encodeSingleParameter(t, values[i]));

  let totalHeadLength = 0;
  for (const enc of encodedList) {
    totalHeadLength += enc.headLength;
  }

  let heads = '';
  let tails = '';
  let currentOffset = 0;

  for (const enc of encodedList) {
    const headHex = enc.encodeHead(totalHeadLength + currentOffset);
    heads += headHex;

    const tailHex = enc.encodeTail();
    tails += tailHex;

    currentOffset += tailHex.length / 2;
  }

  return heads + tails;
}

export function getFunctionSelector(signature: string): string {
  const hashHex = keccak256(signature);
  return hashHex.slice(0, 8);
}