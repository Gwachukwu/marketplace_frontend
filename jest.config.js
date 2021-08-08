module.exports = {
  moduleFileExtensions: ["js", "json", "vue"],

  transform: {
    "^.+\\.js$": "babel-jest",
    ".*\\.vue$": "vue-jest",
  },

  moduleNameMapper: {
    "^@/(.*)$": "<rootDir>/src/$1",
    "^tests/(.*)$": "<rootDir>/tests/$1",
  },

  preset: "@vue/cli-plugin-unit-jest",
//   collectCoverage: true,
//   collectCoverageFrom: ["**/*.{js,vue}", "!**/node_modules/**"],
};
