/** @type {import('jest').Config} */
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  testMatch: ['<rootDir>/src/wallets/**/*.test.ts'],
  moduleNameMapper: {
    '^(\\.{1,2}/.*)\\.js$': '$1'
  },
  moduleDirectories: ['node_modules', '<rootDir>'],
  transform: {
    '^.+\\.tsx?$': [
      'ts-jest',
      {
        tsconfig: {
          allowJs: true,
          esModuleInterop: true,
          moduleResolution: 'node',
          target: 'es2020',
          module: 'commonjs',
          skipLibCheck: true,
          resolveJsonModule: true
        }
      }
    ]
  },
  testTimeout: 30000,
  verbose: true,
  modulePathIgnorePatterns: ['<rootDir>/dist/'],
  collectCoverageFrom: [
    'src/wallets/**/*.ts',
    '!src/wallets/**/*.test.ts',
    '!src/wallets/**/*.d.ts'
  ],
  coverageDirectory: 'coverage/wallets',
  coverageReporters: ['text', 'lcov', 'html'],
  setupFilesAfterEnv: [],
  testPathIgnorePatterns: ['<rootDir>/dist/', '<rootDir>/node_modules/']
};
