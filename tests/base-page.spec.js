/* eslint-disable testing-library/prefer-screen-queries */
// @ts-check
const { test, expect } = require("@playwright/test");

test("homepage has expected title search input and button", async ({
  page,
}) => {
  await page.goto("http://localhost:3000/");

  await expect(page).toHaveTitle(/all your tools in one place/);

  const searchInput = page.getByLabel("Enter tags separated by spaces");
  const searchButton = page.getByRole("button", { name: /Search/ });

  await expect(searchInput).toBeVisible();
  await expect(searchButton).toBeVisible();
});
