const Page = require('./page');

class WikipediaPage extends Page {
    constructor(page) {
        super(page);
        this.searchInput = '#searchInput';
        this.searchButton = '#search-form > fieldset > button';
    }

    async navigate() {
        await this.page.goto('https://www.wikipedia.org/');
    }

    async search(text) {
        await this.page.fill(this.searchInput, text);
        await this.page.click(this.searchButton);
    }
}

module.exports = WikipediaPage;
