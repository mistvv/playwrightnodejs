const { test, expect } = require('@playwright/test');
const WikipediaPage = require('../helpers/wikipedia');

test.describe('Wikipedia', () => {
    let wikipediaPage;

    test.beforeEach(async ({ page }) => {
        wikipediaPage = new WikipediaPage(page);
        await wikipediaPage.navigate();
    });

    test('should have the correct title', async () => {
        await expect(wikipediaPage.page).toHaveTitle(/Wikipedia/);
    });

    test('should allow to search for a topic', async () => {
        await wikipediaPage.search('Playwright');
        await expect(wikipediaPage.page).toHaveTitle(/Playwright - Wikipedia/);
    });

    test('should display search results', async () => {
        await wikipediaPage.search('Playwright');
        const content = await wikipediaPage.page.textContent('#content');
        expect(content).toContain('Playwright');
    });
});
