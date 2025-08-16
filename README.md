# Playwright Testing Framework

This repository provides a basic structure for a web testing framework using Node.js and Playwright. It is designed to be easily extensible for testing any website.

## Prerequisites

Before you begin, ensure you have the following installed:

*   [Node.js](https://nodejs.org/) (which includes npm)

## Installation

1.  **Clone the repository:**

    ```bash
    git clone <repository-url>
    cd playwright-testing-framework
    ```

2.  **Install dependencies:**

    This will install Playwright and all other necessary packages defined in `package.json`.

    ```bash
    npm install
    ```

3.  **Install Playwright browsers:**

    This command will download the browser binaries for Chromium, Firefox, and WebKit.

    ```bash
    npx playwright install
    ```

## Running the tests

To run the tests, use the following command:

```bash
npm test
```

This will execute all the tests in the `tests` directory using the Playwright test runner.

## Project Structure

*   `tests/`: Contains all the test files.
*   `helpers/`: Contains helper functions and page object models.
*   `playwright.config.js`: The main configuration file for Playwright.
*   `package.json`: Defines the project and its dependencies.

## Extending the framework

To add new tests, create a new file in the `tests` directory with a `.spec.js` extension. You can create new page objects in the `helpers` directory to represent the pages of the website you are testing.
