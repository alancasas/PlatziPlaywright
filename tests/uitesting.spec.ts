import { test, expect } from '@playwright/test';



test('Playwing with assertions', async ({ page }) => {
  await page.goto('about:blank');
  await page.goto('http://www.uitestingplayground.com/textinput');
  //Verify input is visiable 
  await expect(page.locator('#newButtonName')).toBeVisible();
  //Select input and fill the input your text 
  await page.locator('#newButtonName').fill('jude');
  //clikc in button 
  await page.locator('#updatingButton').click();
  //verify button text updated 
  await  expect(page.locator('#updatingButton')).toContainText('jude');

});