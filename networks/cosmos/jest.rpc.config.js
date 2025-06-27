/** @type {import('jest').Config} */
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  testMatch: ['<rootDir>/rpc/**/*.test.ts'],
  moduleNameMapper: {
    '^@interchainjs/cosmos$': '<rootDir>/src/index.ts',
    '^(\\.{1,2}/.*)\\.js$': '$1'
  },
  transform: {
    '^.+\\.tsx?$': [
      'ts-jest',
      {
        tsconfig: {
          allowJs: true,
          esModuleInterop: true,
          moduleResolution: 'node',
          target: 'es2020',
          module: 'commonjs'
        }
      }
    ]
  },
  testTimeout: 60000,
  verbose: true,
  modulePathIgnorePatterns: ['<rootDir>/dist/']
};