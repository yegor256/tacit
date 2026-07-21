/*
 * SPDX-FileCopyrightText: Copyright (c) 2015-2026 Yegor Bugayenko
 * SPDX-License-Identifier: MIT
 */

const {devices} = require('@playwright/test'),
  config = {
    forbidOnly: Boolean(process.env.CI),
    fullyParallel: true,
    projects: [
      {
        name: 'chromium',
        use: {
          ...devices['Desktop Chrome'],
          viewport: {height: 720, width: 1280},
        },
      },
      {
        name: 'firefox',
        use: {
          ...devices['Desktop Firefox'],
          viewport: {height: 720, width: 1280},
        },
      },
      {
        name: 'webkit',
        use: {
          ...devices['Desktop Safari'],
          viewport: {height: 720, width: 1280},
        },
      },
    ],
    reporter: [['list'], ['html', {open: 'never'}]],
    retries: 0,
    testDir: './tests',
    use: {
      baseURL: 'http://localhost:8080',
      screenshot: 'only-on-failure',
      trace: 'on-first-retry',
    },
    webServer: {
      command: 'python -m http.server 8080',
      reuseExistingServer: true,
      url: 'http://localhost:8080',
    },
  };

if (process.env.CI) {
  config.retries = 2;
  config.workers = 1;
  config.webServer.reuseExistingServer = false;
}

module.exports = config;
