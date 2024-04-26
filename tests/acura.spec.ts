import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
//   await page.goto('https://acura.com/');
//   await page.getByRole('button', { name: 'SHOP' }).click();

await page.goto('https://acura.com/');
    await page.getByRole('button', { name: 'PROFILE' }).click();

});

