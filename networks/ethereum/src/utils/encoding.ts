export function utf8ToHex(input: string): string {
  return Buffer.from(input, 'utf8').toString('hex');
}

export function hexToUtf8(input: string): string {
  const hexString = input.startsWith('0x') ? input.slice(2) : input;
  if (!/^[0-9a-fA-F]+$/.test(hexString) || hexString.length % 2 !== 0) {
    throw new Error(`Invalid hex string: ${input}`);
  }
  return Buffer.from(hexString, 'hex').toString('utf8');
}
