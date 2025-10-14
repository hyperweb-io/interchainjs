module.exports = {
  rootDir: __dirname,
  preset: "ts-jest",
  testEnvironment: "node",
  setupFiles: ["<rootDir>/jest.setup.js"],
  testPathIgnorePatterns: ["<rootDir>/starship/__tests__/"]
};
