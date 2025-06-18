const dotenv = require("dotenv");
dotenv.config({ path: "./.env.development" });

const nextJest = require("next/jest");

const createJestConfig = nextJest({
  dir: ".",
});
const jestConfig = createJestConfig({
  moduleDirectories: ["node_modules", "<rootDir>"],
});

console.log("Jest configuration:", jestConfig);

module.exports = jestConfig;
