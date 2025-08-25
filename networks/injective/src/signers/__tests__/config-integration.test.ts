import { DEFAULT_INJECTIVE_SIGNER_CONFIG, createInjectiveSignerConfig } from '../config';
import { InjectiveSignatureProcessor, BytesUtils, PRESET_INJECTIVE_SIGNATURE_FORMATS } from '../signature-processor';

describe('Injective Config Integration with BytesUtils', () => {
  it('should use compact format by default in config', () => {
    expect(DEFAULT_INJECTIVE_SIGNER_CONFIG.signature?.format).toBe(PRESET_INJECTIVE_SIGNATURE_FORMATS['compact']);
  });

  it('should process signature using BytesUtils when compact format is specified in config', () => {
    // Create a mock 65-byte signature
    const mockSignature = new Uint8Array(65);
    mockSignature.set(new Uint8Array(32).fill(0xaa), 0); // r component
    mockSignature.set(new Uint8Array(32).fill(0xbb), 32); // s component
    mockSignature[64] = 27; // recovery byte

    // Use the default config format
    const configFormat = DEFAULT_INJECTIVE_SIGNER_CONFIG.signature?.format;

    // Process signature using the config format
    const result = InjectiveSignatureProcessor.processSignature(mockSignature, configFormat);

    // Verify it produces the same result as direct BytesUtils usage
    const splitSig = BytesUtils.splitSignature(mockSignature);
    const expectedResult = BytesUtils.arrayify(
      BytesUtils.concat([splitSig.r, splitSig.s])
    );

    expect(result).toEqual(expectedResult);
    expect(result.length).toBe(64); // Should be compact (no recovery byte)
  });

  it('should use BytesUtils when creating signer config with compact format', () => {
    const userConfig = {
      chainId: 'injective-1',
      queryClient: {} as any, // Mock query client
      signature: {
        format: 'compact' as const
      }
    };

    const mergedConfig = createInjectiveSignerConfig(userConfig);

    // Verify the format is preserved
    expect(mergedConfig.signature?.format).toBe('compact');

    // Test that this format actually uses BytesUtils
    const mockSignature = new Uint8Array(65);
    mockSignature.set(new Uint8Array(32).fill(0xcc), 0);
    mockSignature.set(new Uint8Array(32).fill(0xdd), 32);
    mockSignature[64] = 28;

    const result = InjectiveSignatureProcessor.processSignature(
      mockSignature,
      mergedConfig.signature?.format
    );

    // Should produce compact format using BytesUtils
    expect(result.length).toBe(64);
    expect(result.slice(0, 32)).toEqual(new Uint8Array(32).fill(0xcc));
    expect(result.slice(32, 64)).toEqual(new Uint8Array(32).fill(0xdd));
  });

  it('should demonstrate the exact BytesUtils usage pattern from main branch', () => {
    // This test demonstrates that the config format 'compact'
    // uses the exact same BytesUtils pattern as the main branch
    const mockSignature = new Uint8Array(65);
    mockSignature.set(new Uint8Array(32).fill(0x11), 0);
    mockSignature.set(new Uint8Array(32).fill(0x22), 32);
    mockSignature[64] = 27;

    // Main branch pattern:
    const splitSignature = BytesUtils.splitSignature(mockSignature);
    const mainBranchResult = BytesUtils.arrayify(
      BytesUtils.concat([splitSignature.r, splitSignature.s])
    );

    // Config-driven pattern:
    const configResult = InjectiveSignatureProcessor.processSignature(
      mockSignature,
      'compact'
    );

    // Should be identical
    expect(configResult).toEqual(mainBranchResult);

    // Verify the exact pattern is followed
    expect(configResult.length).toBe(64);
    expect(configResult.slice(0, 32)).toEqual(splitSignature.r);
    expect(configResult.slice(32, 64)).toEqual(splitSignature.s);
  });

  it('should work with EthSecp256k1Signature.toCompact() using config format', () => {
    // This verifies that EthSecp256k1Signature.toCompact() uses the same
    // BytesUtils pattern when processing with 'compact' format
    const mockSignature = new Uint8Array(65);
    mockSignature.set(new Uint8Array(32).fill(0x33), 0);
    mockSignature.set(new Uint8Array(32).fill(0x44), 32);
    mockSignature[64] = 28;

    // Direct BytesUtils usage (main branch style)
    const splitSig = BytesUtils.splitSignature(mockSignature);
    const directResult = BytesUtils.arrayify(
      BytesUtils.concat([splitSig.r, splitSig.s])
    );

    // EthSecp256k1Signature.toCompact() (which uses 'compact' format internally)
    const { EthSecp256k1Signature } = require('../signature-processor');
    const ethSig = new EthSecp256k1Signature(mockSignature);
    const toCompactResult = ethSig.toCompact();

    // Should produce the same result
    expect(toCompactResult.value).toEqual(directResult);
  });
});
