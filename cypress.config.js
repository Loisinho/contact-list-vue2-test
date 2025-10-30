const { defineConfig } = require("cypress")

module.exports = defineConfig({
  e2e: {
    baseUrl: "http://localhost:8080",
    // eslint-disable-next-line no-unused-vars
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    specPattern: "tests/e2e/**/*.spec.js",
    supportFile: false
  }
});
