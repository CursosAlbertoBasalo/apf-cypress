import { defineConfig } from 'cypress';

export default defineConfig({
  e2e: {
    baseUrl: 'http://localhost:4200',
    viewportWidth: 1280,
    viewportHeight: 1024,
    defaultCommandTimeout: 4000,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
