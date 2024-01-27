// @ts-check
import { test, expect } from "@playwright/test";

test("homepage has expected title search input and button", async ({
  page,
}) => {
  await page.goto("http://localhost:5173/");

  await expect(page).toHaveTitle(/all your tools in one place/);

  const searchInput = page.getByLabel("Enter tags separated by spaces");
  const searchButton = page.getByRole("button", { name: /Search/ });

  await expect(searchInput).toBeVisible();
  await expect(searchButton).toBeVisible();
});
