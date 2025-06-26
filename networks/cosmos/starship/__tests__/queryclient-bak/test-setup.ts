// networks/cosmos/starship/__tests__/queryclient/test-setup.ts
import { jest } from '@jest/globals';

// Global test setup
beforeAll(() => {
  console.log('🚀 Starting Cosmos Query Client Test Suite');
  console.log('📡 Testing against Osmosis mainnet');
  console.log('⚠️  Tests may be slow due to network operations');
});

afterAll(() => {
  console.log('✅ Cosmos Query Client Test Suite completed');
});

// Increase timeout for network operations
jest.setTimeout(60000);

// Handle unhandled promise rejections
process.on('unhandledRejection', (reason, promise) => {
  console.error('Unhandled Rejection at:', promise, 'reason:', reason);
});

// Handle uncaught exceptions
process.on('uncaughtException', (error) => {
  console.error('Uncaught Exception:', error);
});

// Global test utilities
global.testUtils = {
  delay: (ms: number) => new Promise(resolve => setTimeout(resolve, ms)),
  
  retryOperation: async <T>(
    operation: () => Promise<T>,
    maxRetries: number = 3,
    delayMs: number = 1000
  ): Promise<T> => {
    let lastError: Error;
    
    for (let i = 0; i < maxRetries; i++) {
      try {
        return await operation();
      } catch (error) {
        lastError = error as Error;
        if (i < maxRetries - 1) {
          await global.testUtils.delay(delayMs);
        }
      }
    }
    
    throw lastError!;
  },
  
  expectEventually: async (
    condition: () => boolean | Promise<boolean>,
    timeoutMs: number = 10000,
    intervalMs: number = 100
  ): Promise<void> => {
    const startTime = Date.now();
    
    while (Date.now() - startTime < timeoutMs) {
      if (await condition()) {
        return;
      }
      await global.testUtils.delay(intervalMs);
    }
    
    throw new Error(`Condition not met within ${timeoutMs}ms`);
  }
};

// Declare global types
declare global {
  var testUtils: {
    delay: (ms: number) => Promise<void>;
    retryOperation: <T>(
      operation: () => Promise<T>,
      maxRetries?: number,
      delayMs?: number
    ) => Promise<T>;
    expectEventually: (
      condition: () => boolean | Promise<boolean>,
      timeoutMs?: number,
      intervalMs?: number
    ) => Promise<void>;
  };
}