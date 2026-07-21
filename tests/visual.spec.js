/*
 * SPDX-FileCopyrightText: Copyright (c) 2015-2026 Yegor Bugayenko
 * SPDX-License-Identifier: MIT
 */

const {test, expect} = require('@playwright/test');

test.describe('index page visual regression', () => {
  test.beforeEach(async ({page}) => {
    await page.goto('/');
  });

  test('full page renders', async ({page}) => {
    await expect(page).toHaveScreenshot('index-full', {fullPage: true});
  });
});

test.describe('component visual regression', () => {
  test.beforeEach(async ({page}) => {
    await page.goto('/');
  });

  test('headings render', async ({page}) => {
    await expect(page.locator('h1')).toHaveScreenshot('headings');
  });

  test('table renders', async ({page}) => {
    await expect(page.locator('table')).toHaveScreenshot('table');
  });

  test('form renders', async ({page}) => {
    await expect(page.locator('form').first()).toHaveScreenshot('form');
  });
});
