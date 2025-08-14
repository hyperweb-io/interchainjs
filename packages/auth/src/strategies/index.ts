import { IAddressStrategy } from '@interchainjs/types';

// Registry for address strategies
const strategyRegistry: Map<string, IAddressStrategy> = new Map();

/**
 * Register an address strategy
 * @param strategy The address strategy to register
 */
export function registerAddressStrategy(strategy: IAddressStrategy): void {
  if (!strategy.name) {
    throw new Error('Address strategy must have a name');
  }
  strategyRegistry.set(strategy.name, strategy);
}

/**
 * Get a registered address strategy by name
 * @param name The name of the strategy
 * @returns The address strategy or undefined if not found
 */
export function getAddressStrategy(name: string): IAddressStrategy | undefined {
  return strategyRegistry.get(name);
}

/**
 * Resolve address strategy from either a strategy object or name
 * @param strategy Strategy object or name
 * @returns The resolved address strategy
 */
export function resolveAddressStrategy(strategy: IAddressStrategy | string): IAddressStrategy {
  if (typeof strategy === 'string') {
    const resolved = getAddressStrategy(strategy);
    if (!resolved) {
      throw new Error(`Unknown address strategy: ${strategy}`);
    }
    return resolved;
  }
  return strategy;
}
export * from './built-in';

// Auto-register common strategies (backwards compatible)
import { COSMOS_ADDRESS_STRATEGY, ETHEREUM_ADDRESS_STRATEGY, INJECTIVE_ETH_ADDRESS_STRATEGY } from './built-in';
registerAddressStrategy(COSMOS_ADDRESS_STRATEGY);
registerAddressStrategy(ETHEREUM_ADDRESS_STRATEGY);
registerAddressStrategy(INJECTIVE_ETH_ADDRESS_STRATEGY);
