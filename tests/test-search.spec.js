/* eslint-disable testing-library/prefer-screen-queries */
// @ts-check
const { test, expect } = require("@playwright/test");

test.describe("test search results", () => {
  test("searching for repl should return a single result", async ({ page }) => {
    await page.goto("http://localhost:3000/");

    const searchInput = page.getByLabel("Enter tags separated by spaces");
    const searchButton = page.getByRole("button", { name: /Search/ });

    searchInput.fill("repl");
    searchButton.click();

    // ensure the URL updates so that it is bookmarkable
    await expect(page).toHaveURL(/q=repl/);

    // get the search results list
    const results = page.getByTestId("search-result-list");
    const listItems = results.getByTestId("card-component");
    // the repl query should return a two results
    await expect(listItems).toHaveCount(2);
  });

  test("searching for glitch should return a single result", async ({
    page,
  }) => {
    await page.goto("http://localhost:3000/");

    const searchInput = page.getByLabel("Enter tags separated by spaces");
    const searchButton = page.getByRole("button", { name: /Search/ });

    searchInput.fill("glitch");
    searchButton.click();

    // ensure the URL updates so that it is bookmarkable
    await expect(page).toHaveURL(/q=glitch/);

    // get the search results list
    const results = page.getByTestId("search-result-list");
    const listItems = results.getByTestId("card-component");
    // the glitch query should return a two results
    await expect(listItems).toHaveCount(1);
  });
});
