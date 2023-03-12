const { defineConfig } = require("cypress");

module.exports = defineConfig({
  defaultCommandTimeout: 1000,
  defaultCommandTimeOut: 30000,
  viewportHeight: 800,
  viewportWidth: 500,
  retries: 3,

  e2e: {
    // We've imported your old cypress plugins here.
    // You may want to clean this up later by importing these.
    setupNodeEvents(on, config) {
      return require("./cypress/plugins/index.js")(on, config);
    },
    baseUrl: "http://localhost:3000",
  },

  component: {
    devServer: {
      framework: "angular",
      bundler: "webpack",
    },
    specPattern: "**/*.cy.ts",
  },
});
