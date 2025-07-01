/** @type {import('jest').Config} */
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  testMatch: ['<rootDir>/src/**/*.test.ts'],
  moduleNameMapper: {
    '^(\\.{1,2}/.*)\\.js$': '$1'
  },
  moduleDirectories: ['node_modules', '<rootDir>'],
  modulePaths: ['<rootDir>/dist'],
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