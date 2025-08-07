module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  testMatch: [
    '**/src/signers/**/*.test.ts',
    '**/src/crypto/**/*.test.ts'
  ],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json'],
  transform: {
    '^.+\\.(ts|tsx)$': 'ts-jest',
  },
  collectCoverageFrom: [
    'src/signers/**/*.ts',
    'src/crypto/**/*.ts',
    '!src/signers/**/*.test.ts',
    '!src/crypto/**/*.test.ts',
    '!src/signers/SignerFromPrivateKey.ts', // Exclude legacy signer from coverage
  ],
  coverageDirectory: 'coverage',
  coverageReporters: ['text', 'lcov', 'html'],
  verbose: true,
  setupFilesAfterEnv: [],
  testTimeout: 30000,
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
  },
};
