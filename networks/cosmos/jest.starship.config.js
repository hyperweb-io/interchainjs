/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  testTimeout: 15000,
  preset: 'ts-jest',
  testEnvironment: 'node',
  transform: {
    '^.+\\.[jt]sx?$': [
      'ts-jest',
      {
        tsconfig: {
          moduleResolution: 'node',
          allowJs: true,
          esModuleInterop: true,
          skipLibCheck: true,
          strict: false,
        },
        isolatedModules: true,
      },
    ],
  },
  transformIgnorePatterns: [`node_modules/(?!(.pnpm|@noble/hashes|@noble/curves|@scure/bip32|@scure/base|bech32|bs58|base-x))`],
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
