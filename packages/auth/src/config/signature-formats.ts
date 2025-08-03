import { Secp256k1 } from '@interchainjs/crypto';

/**
 * Signature format function type
 * Takes a signature and returns a processed signature
 */
export type SignatureFormatFunction = (signature: Uint8Array) => Uint8Array;

// Signature format function implementations
const compactFormat: SignatureFormatFunction = (signature: Uint8Array) => Secp256k1.trimRecoveryByte(signature);
const fullFormat: SignatureFormatFunction = (signature: Uint8Array) => signature;
const rawFormat: SignatureFormatFunction = (signature: Uint8Array) => signature;

// Preset signature format functions mapping (for Cosmos/Injective)
export const PRESET_SIGNATURE_FORMATS: Record<string, SignatureFormatFunction> = {
  'compact': compactFormat,
  'full': fullFormat,
  'raw': rawFormat,
};

// Internal helper to resolve signature format function
export function resolveSignatureFormat(formatFn?: SignatureFormatFunction | string, defaultFn?: SignatureFormatFunction | string): SignatureFormatFunction | undefined {
  if (!formatFn) {
    if (!defaultFn) return undefined;
    return resolveSignatureFormat(defaultFn);
  }
  if (typeof formatFn === 'string') {
    if (!PRESET_SIGNATURE_FORMATS[formatFn]) {
      if (defaultFn) {
        return resolveSignatureFormat(defaultFn);
      } else {
        throw new Error(`Unknown signature format: ${formatFn}`);
      }
    }
    return PRESET_SIGNATURE_FORMATS[formatFn];
  }
  return formatFn;
}
