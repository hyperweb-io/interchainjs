/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  testTimeout: 15000,
  preset: 'ts-jest',
  testEnvironment: 'node',
  transform: {
    '^.+\\.tsx?$': [
      'ts-jest',
      {
        babelConfig: false,
        tsconfig: 'tsconfig.json',
        diagnostics: false,
      },
    ],
  },
  transformIgnorePatterns: [`/node_modules/*`],
  modulePathIgnorePatterns: ['<rootDir>/dist/'],
  testRegex: '/starship/__tests__/.*\\.(test|spec)\\.(jsx?|tsx?)$',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  moduleNameMapper: {
    '^@interchainjs/cosmos$': '<rootDir>/dist',
    '^@interchainjs/cosmos-types$': '<rootDir>/../../libs/cosmos-types/dist',
    '^@interchainjs/types$': '<rootDir>/../../packages/types/dist',
    '^@interchainjs/utils$': '<rootDir>/../../packages/utils/dist',
    '^@interchainjs/crypto$': '<rootDir>/../../packages/crypto/dist',
    '^@interchainjs/encoding$': '<rootDir>/../../packages/encoding/dist',
    '^@interchainjs/math$': '<rootDir>/../../packages/math/dist',
    '^@interchainjs/ethereum$': '<rootDir>/../../networks/ethereum/dist',
    '^@interchainjs/injective$': '<rootDir>/../../networks/injective/dist',
    '^interchainjs$': '<rootDir>/../../libs/interchainjs/dist',
    '^interchainjs/(.*)$': '<rootDir>/../../libs/interchainjs/dist/$1',
  },
};
