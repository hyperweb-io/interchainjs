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
};
