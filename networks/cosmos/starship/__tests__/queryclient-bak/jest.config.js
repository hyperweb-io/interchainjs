// networks/cosmos/starship/__tests__/queryclient/jest.config.js
export default {
  preset: 'ts-jest/presets/default-esm',
  extensionsToTreatAsEsm: ['.ts'],
  testEnvironment: 'node',
  testMatch: [
    '**/*.test.ts'
  ],
  transform: {
    '^.+\\.ts$': ['ts-jest', {
      useESM: true,
      tsconfig: {
        module: 'esnext',
        target: 'es2020',
        moduleResolution: 'node',
        allowSyntheticDefaultImports: true,
        esModuleInterop: true
      }
    }]
  },
  moduleNameMapper: {
    '^(\\.{1,2}/.*)\\.js$': '$1'
  },
  testTimeout: 60000, // 60 seconds for network operations
  setupFilesAfterEnv: ['<rootDir>/test-setup.ts'],
  collectCoverageFrom: [
    '../../../src/**/*.ts',
    '!../../../src/**/*.d.ts',
    '!../../../src/**/index.ts'
  ],
  coverageDirectory: './coverage',
  coverageReporters: ['text', 'lcov', 'html'],
  verbose: true,
  detectOpenHandles: true,
  forceExit: true
};