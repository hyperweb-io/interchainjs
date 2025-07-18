module.exports = {
  preset: '../../jest.config.js',
  testEnvironment: 'node',
  testMatch: [
    '**/__tests__/e2e/**/events*.test.ts'
  ],
  setupFilesAfterEnv: ['../../jest.setup.js'],
  testTimeout: 30000,
  collectCoverageFrom: [
    'src/event/**/*.ts',
    '!src/event/**/*.d.ts',
    '!src/event/**/index.ts'
  ],
  coverageDirectory: 'coverage/events',
  coverageReporters: ['text', 'lcov', 'html'],
  coverageThreshold: {
    global: {
      branches: 70,
      functions: 70,
      lines: 70,
      statements: 70
    }
  },
  testPathIgnorePatterns: [
    '/node_modules/',
    '/dist/',
    '/lib/'
  ],
  globals: {
    'ts-jest': {
      tsconfig: '<rootDir>/tsconfig.json'
    }
  },
  moduleNameMapping: {
    '^@interchainjs/(.*)$': '<rootDir>/../../libs/$1/src'
  }
};