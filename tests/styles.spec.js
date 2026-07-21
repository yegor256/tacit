/*
 * SPDX-FileCopyrightText: Copyright (c) 2015-2026 Yegor Bugayenko
 * SPDX-License-Identifier: MIT
 */

const {test, expect} = require('@playwright/test');

test.describe('cross-browser computed styles', () => {
  test.beforeEach(async ({page}) => {
    await page.goto('/');
  });

  test('h1 uses framework weight', async ({page}) => {
    const h1 = page.locator('h1');
    await expect(h1).toHaveCSS('font-weight', '500');
  });

  test('table fills width', async ({page}) => {
    const table = page.locator('table');
    await expect(table).toHaveCSS('width', '100%');
  });

  test('text inputs are inline blocks', async ({page}) => {
    const input = page.locator('input[type="text"]').first();
    await expect(input).toHaveCSS('display', 'inline-block');
  });

  test('links suppress default underline', async ({page}) => {
    const link = page.locator('a[href]').first();
    await expect(link).toHaveCSS('text-decoration-line', 'none');
  });

  test('strong text is emphasized', async ({page}) => {
    const strong = page.locator('strong').first();
    await expect(strong).toHaveCSS('font-weight', '600');
  });
});
