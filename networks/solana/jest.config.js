module.exports = {
  rootDir: __dirname,
  preset: "ts-jest",
  testEnvironment: "node",
  setupFiles: ["<rootDir>/jest.setup.js"],
  testPathIgnorePatterns: ["<rootDir>/starship/__tests__/"],
  transform: {
    '^.+\\.[jt]sx?$': [
      'ts-jest',
      {
        babelConfig: false,
        tsconfig: 'tsconfig.json',
      },
    ],
  },
  transformIgnorePatterns: [`node_modules/(?!(.pnpm|bs58|base-x))`],
};
