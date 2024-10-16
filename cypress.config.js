const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://home.openweathermap.org/users/sign_in',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});