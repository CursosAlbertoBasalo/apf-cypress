import { defineConfig } from 'cypress';

export default defineConfig({
  e2e: {
    baseUrl: 'http://localhost:4200',
    viewportWidth: 1280,
    defaultCommandTimeout: 2000,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
