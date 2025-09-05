const WikipediaPage = require('../pages/wikipedia.page');

class WikipediaActions {
    constructor(page) {
        this.page = page;
        this.wikipediaPage = new WikipediaPage(page);
    }

    async navigate(url) {
        await this.page.goto(url);
    }

    async search(text) {
        await this.page.fill(this.wikipediaPage.searchInput, text);
        await this.page.click(this.wikipediaPage.searchButton);
    }
}

module.exports = WikipediaActions;
