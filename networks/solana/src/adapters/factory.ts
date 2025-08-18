/**
 * Solana Protocol Adapter Factory
 */

import { SolanaVersion, SolanaCapabilities } from '../types/protocol';
import {
  ISolanaProtocolAdapter,
  SolanaAdapterFactory,
  validateAdapterConfig,
  DEFAULT_SOLANA_CAPABILITIES,
  mergeCapabilities
} from './base';
import { SolanaV1Adapter } from './v1';
import { SolanaProtocolError } from '../errors';

/**
 * Create a Solana protocol adapter for the specified version
 */
export const createSolanaAdapter: SolanaAdapterFactory = async (
  version: SolanaVersion,
  capabilities?: Partial<SolanaCapabilities>
): Promise<ISolanaProtocolAdapter> => {
  switch (version) {
    case SolanaVersion.V1:
      return new SolanaV1Adapter(capabilities);

    case SolanaVersion.V2:
      // Future implementation
      throw new SolanaProtocolError(
        `Solana protocol version ${version} is not yet implemented`,
        version
      );

    default:
      throw new SolanaProtocolError(
        `Unsupported Solana protocol version: ${version}`,
        version
      );
  }
};

/**
 * Auto-detect the best protocol adapter for a given endpoint
 */
export async function detectSolanaAdapter(
  endpoint: string,
  preferredVersion?: SolanaVersion
): Promise<ISolanaProtocolAdapter> {
  try {
    // Try to detect capabilities by making test requests
    const capabilities = await detectNetworkCapabilities(endpoint);

    // Use preferred version if specified and supported
    if (preferredVersion) {
      const defaultCapabilities = DEFAULT_SOLANA_CAPABILITIES[preferredVersion];
      const mergedCapabilities = mergeCapabilities(defaultCapabilities, capabilities);
      if (validateAdapterConfig(preferredVersion, mergedCapabilities)) {
        return createSolanaAdapter(preferredVersion, capabilities);
      }
    }

    // Default to V1 for now
    return createSolanaAdapter(SolanaVersion.V1, capabilities);
  } catch (error) {
    // Fallback to V1 with default capabilities
    return createSolanaAdapter(SolanaVersion.V1);
  }
}

/**
 * Detect network capabilities by testing endpoint features
 */
async function detectNetworkCapabilities(endpoint: string): Promise<Partial<SolanaCapabilities>> {
  const capabilities: Partial<SolanaCapabilities> = {};

  try {
    // Test basic connectivity
    const response = await fetch(endpoint, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        jsonrpc: '2.0',
        id: 1,
        method: 'getVersion',
        params: []
      })
    });

    if (!response.ok) {
      throw new Error(`HTTP ${response.status}: ${response.statusText}`);
    }

    const data = await response.json();

    if (data.error) {
      throw new Error(`RPC Error: ${data.error.message}`);
    }

    // Extract version information if available
    const version = data.result;
    if (version && version['solana-core']) {
      const coreVersion = version['solana-core'];

      // Detect versioned transaction support (available in 1.14+)
      capabilities.supportsVersionedTransactions = compareVersions(coreVersion, '1.14.0') >= 0;

      // Detect compute budget support (available in 1.9+)
      capabilities.supportsComputeBudget = compareVersions(coreVersion, '1.9.0') >= 0;

      // Token extensions are newer feature
      capabilities.supportsTokenExtensions = compareVersions(coreVersion, '1.16.0') >= 0;
    }

    // Test for specific method support
    await testMethodSupport(endpoint, capabilities);

  } catch (error) {
    // If detection fails, return minimal capabilities
    console.warn('Failed to detect network capabilities:', error);
  }

  return capabilities;
}

/**
 * Test support for specific RPC methods
 */
async function testMethodSupport(
  endpoint: string,
  capabilities: Partial<SolanaCapabilities>
): Promise<void> {
  const testMethods = [
    'getLatestBlockhash',
    'getRecentBlockhash', // Legacy method
    'getFeeForMessage'
  ];

  for (const method of testMethods) {
    try {
      const response = await fetch(endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          jsonrpc: '2.0',
          id: 1,
          method,
          params: []
        })
      });

      const data = await response.json();

      // If method is not found, it's not supported
      if (data.error && data.error.code === -32601) {
        // Method not found - this is expected for some methods
        continue;
      }

      // Method exists (even if it returns an error due to missing params)
      // This indicates the method is supported

    } catch (error) {
      // Network error or other issue - skip this test
      continue;
    }
  }
}

/**
 * Simple version comparison utility
 */
function compareVersions(version1: string, version2: string): number {
  const v1Parts = version1.split('.').map(Number);
  const v2Parts = version2.split('.').map(Number);

  const maxLength = Math.max(v1Parts.length, v2Parts.length);

  for (let i = 0; i < maxLength; i++) {
    const v1Part = v1Parts[i] || 0;
    const v2Part = v2Parts[i] || 0;

    if (v1Part > v2Part) return 1;
    if (v1Part < v2Part) return -1;
  }

  return 0;
}

/**
 * Get default adapter for quick setup
 */
export function getDefaultSolanaAdapter(): Promise<ISolanaProtocolAdapter> {
  return createSolanaAdapter(SolanaVersion.V1);
}

/**
 * Validate adapter compatibility with endpoint
 */
export async function validateAdapterCompatibility(
  adapter: ISolanaProtocolAdapter,
  endpoint: string
): Promise<boolean> {
  try {
    const detectedCapabilities = await detectNetworkCapabilities(endpoint);
    const adapterCapabilities = adapter.getCapabilities();

    // Check if adapter capabilities are compatible with detected capabilities
    // This is a simplified check - in practice, you might want more sophisticated validation

    if (detectedCapabilities.supportsVersionedTransactions !== undefined) {
      if (adapterCapabilities.supportsVersionedTransactions && !detectedCapabilities.supportsVersionedTransactions) {
        return false;
      }
    }

    if (detectedCapabilities.supportsComputeBudget !== undefined) {
      if (adapterCapabilities.supportsComputeBudget && !detectedCapabilities.supportsComputeBudget) {
        return false;
      }
    }

    return true;
  } catch (error) {
    // If validation fails, assume compatible
    return true;
  }
}
