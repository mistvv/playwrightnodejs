const Page = require('./page');

class WikipediaPage extends Page {
    constructor(page) {
        super(page);
        this.searchInput = '#searchInput';
        this.searchButton = '#search-form > fieldset > button';
    }
}

module.exports = WikipediaPage;
