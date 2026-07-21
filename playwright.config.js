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
        use: {...devices['Desktop Chrome']},
      },
      {
        name: 'firefox',
        use: {...devices['Desktop Firefox']},
      },
      {
        name: 'webkit',
        use: {...devices['Desktop Safari']},
      },
    ],
    reporter: 'list',
    retries: 0,
    testDir: './tests',
    use: {
      baseURL: 'http://localhost:8080',
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
