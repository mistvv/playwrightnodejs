const { test, expect } = require('@playwright/test');
const WikipediaActions = require('../actions/wikipedia.actions');
const { getConfig } = require('../helpers/config.helper');

test.describe('Wikipedia', () => {
    let wikipediaActions;
    let page;
    const config = getConfig();

    test.beforeEach(async ({ browser }) => {
        page = await browser.newPage();
        wikipediaActions = new WikipediaActions(page);
        await wikipediaActions.navigate(config.default.URL);
    });

    test('should have the correct title', async () => {
        await expect(page).toHaveTitle(/Wikipedia/);
    });

    test('should allow to search for a topic', async () => {
        await wikipediaActions.search('Playwright');
        await expect(page).toHaveTitle(/Playwright - Wikipedia/);
    });

    test('should display search results', async () => {
        await wikipediaActions.search('Playwright');
        const content = await page.textContent('#content');
        expect(content).toContain('Playwright');
    });
});
