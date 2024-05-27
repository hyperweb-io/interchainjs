/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  testTimeout: 15000,
  preset: "ts-jest",
  testEnvironment: "node",
  transform: {
    "^.+\\.tsx?$": [
      "ts-jest",
      {
        babelConfig: false,
        tsconfig: "tsconfig.json",
      },
    ],
  },
  transformIgnorePatterns: [`/node_modules/*`],
  testRegex: "/starship/__tests__/testnet\\.test\\.ts$",
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
};
