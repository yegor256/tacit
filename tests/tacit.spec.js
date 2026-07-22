/*
 * SPDX-FileCopyrightText: Copyright (c) 2015-2026 Yegor Bugayenko
 * SPDX-License-Identifier: MIT
 */

const {test, expect} = require('@playwright/test');

test('index page loads across browsers', async ({page}) => {
  await page.goto('/');
  await expect(page).toHaveTitle('tacit');
});
