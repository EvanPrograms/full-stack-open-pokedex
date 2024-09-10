// playwright.config.js
import { defineConfig } from '@playwright/test'

export default defineConfig({
  testDir: './e2e-tests', // Directory where tests will be stored
  timeout: 30000, // Timeout per test in milliseconds
  use: {
    headless: true, // Run tests in headless mode
    browserName: 'chromium', // You can change this to 'firefox' or 'webkit'
    viewport: { width: 1280, height: 720 },
    baseURL: 'http://localhost:8080/'
  },
  reporter: [['list'], ['json', { outputFile: 'test-results.json' }]],
  webServer: {
    command: 'npm run start',
    url: 'http://localhost:8080/',
    timeout: 120 * 1000,
    reuseExistingServer: !process.env.CI,
  },
})
