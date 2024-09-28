import { defineConfig, devices } from '@playwright/test';
import baseEnvUrl from './tests/utils/environment-base-url';

require('dotenv').config();

export default defineConfig({
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: 1,
  workers: process.env.CI ? 1 : undefined,
  reporter: [['html', { open: 'never' }]],
  timeout: 5 * 60 * 1000, //Test execution time limit - 5 minuts
  expect:{
    timeout: 60000 //assertions made with expect - 60 seconds
  },
  use: {
    headless: true,
    viewport: { width: 1280, height: 720 },
    baseURL: process.env.ENV === 'int'
      ? baseEnvUrl.int
      : process.env.ENV === 'qa'
        ? baseEnvUrl.qa
        : baseEnvUrl.stage,
  },
  projects: [
    {
      name: 'UI Tests - Chrome',
      testDir: './tests/specs',
      use: {
        ...devices['Desktop Chrome'],
        video: 'on',
        screenshot: 'on',
        viewport: { width: 1280, height: 720 },
        
      },
    },
    {
      name: 'API Tests',
      testDir: './tests/API/specsApi',
      use: {
        video: 'off',
        screenshot: 'off',
      },
    },
  ],
});
