/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  globals: {
    'ts-jest': {
      tsconfig: {
        moduleResolution: 'node',
        allowJs: true,
        esModuleInterop: true,
        skipLibCheck: true,
        strict: false,
      },
      isolatedModules: true,
    }
  },
  transformIgnorePatterns: [`/node_modules/*`],
  modulePathIgnorePatterns: [
    '<rootDir>/dist/',
  ],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  moduleNameMapper: {
    '^@interchainjs/types$': '<rootDir>/../types/dist',
    '^@interchainjs/utils$': '<rootDir>/../utils/dist',
    '^@interchainjs/crypto$': '<rootDir>/../crypto/dist',
    '^@interchainjs/encoding$': '<rootDir>/../encoding/dist',
    '^@interchainjs/math$': '<rootDir>/../math/dist',
  },
};