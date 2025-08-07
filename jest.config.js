/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
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
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  haste: {
    enableSymlinks: false,
    throwOnModuleCollision: false,
  },
  modulePathIgnorePatterns: [
    '<rootDir>/packages/.*/dist/',
    '<rootDir>/networks/.*/dist/',
    '<rootDir>/libs/.*/dist/',
  ],
};
