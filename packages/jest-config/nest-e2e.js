/** @type {import("@jest/types").Config.InitialOptions} */
module.exports = {
  rootDir: ".",
  testEnvironment: "node",
  testRegex: ".*\\.e2e-spec\\.ts$",
  transform: {
    "^.+\\.(t|j)s$": "ts-jest",
  },
  moduleFileExtensions: ["ts", "js", "json"],
};
