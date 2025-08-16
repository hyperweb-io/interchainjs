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
      },
    ],
  },
  transformIgnorePatterns: [`/node_modules/*`],
  modulePathIgnorePatterns: ['<rootDir>/dist/'],
  testRegex: '/starship/__tests__/.*\\.(test|spec)\\.(jsx?|tsx?)$',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  moduleNameMapper: {
    '^@interchainjs/cosmos$': '<rootDir>/src/index.ts',
    '^@interchainjs/cosmos/utils$': '<rootDir>/src/utils/index.ts',
    '^@interchainjs/cosmos/types/signing-client$': '<rootDir>/src/types/signing-client.ts',
  },
};
