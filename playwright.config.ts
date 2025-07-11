import { defineConfig } from '@playwright/test';

export default defineConfig({
  use: {
    baseURL: process.env.BASE_URL || 'http://localhost:4321',
  },
  reporter: [['junit', { outputFile: 'test-results.xml' }]],
});