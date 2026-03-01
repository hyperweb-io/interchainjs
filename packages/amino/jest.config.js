/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  transform: {
    '^.+\\.[jt]sx?$': [
      'ts-jest',
      {
        babelConfig: false,
        tsconfig: 'tsconfig.json',
      },
    ],
  },
  transformIgnorePatterns: [`node_modules/(?!(.pnpm|@noble/hashes|@noble/curves|@scure/bip32|@scure/base|bech32))`],
  modulePathIgnorePatterns: [
    '<rootDir>/dist/',
  ],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  moduleNameMapper: {
    '^@interchainjs/types$': '<rootDir>/../types/src',
    '^@interchainjs/utils$': '<rootDir>/../utils/src',
    '^@interchainjs/crypto$': '<rootDir>/../crypto/src',
    '^@interchainjs/encoding$': '<rootDir>/../encoding/src',
    '^@interchainjs/math$': '<rootDir>/../math/src',
  },
};
