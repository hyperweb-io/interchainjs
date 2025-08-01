import { EthereumSecp256k1Signature } from '../crypto';

/**
 * Ethereum signature format function type
 * Takes an Ethereum signature and optional chainId, returns the v value as Uint8Array
 */
export type EthereumSignatureFormatFunction = (
  signature: EthereumSecp256k1Signature,
  chainId?: number
) => Uint8Array;

// Ethereum signature format function implementations
const eip155Format: EthereumSignatureFormatFunction = (signature: EthereumSecp256k1Signature, chainId?: number) => {
  return signature.toEthereumFormat(chainId).v;
};

const simpleFormat: EthereumSignatureFormatFunction = (signature: EthereumSecp256k1Signature) => {
  return signature.toEthereumFormat().v;
};

const rawFormat: EthereumSignatureFormatFunction = (signature: EthereumSecp256k1Signature) => {
  return new Uint8Array([signature.recovery]);
};

// Preset Ethereum signature format functions mapping
export const PRESET_ETHEREUM_SIGNATURE_FORMATS: Record<string, EthereumSignatureFormatFunction> = {
  'eip155': eip155Format,
  'simple': simpleFormat,
  'raw': rawFormat,
};

// Internal helper to resolve Ethereum signature format function
export function resolveEthereumSignatureFormat(
  formatFn?: EthereumSignatureFormatFunction | string,
  defaultFn?: EthereumSignatureFormatFunction | string
): EthereumSignatureFormatFunction | undefined {
  if (!formatFn) {
    if (!defaultFn) return undefined;
    return resolveEthereumSignatureFormat(defaultFn);
  }
  if (typeof formatFn === 'string') {
    if (!PRESET_ETHEREUM_SIGNATURE_FORMATS[formatFn]) {
      if (defaultFn) {
        return resolveEthereumSignatureFormat(defaultFn);
      } else {
        throw new Error(`Unknown Ethereum signature format: ${formatFn}`);
      }
    }
    return PRESET_ETHEREUM_SIGNATURE_FORMATS[formatFn];
  }
  return formatFn;
}
