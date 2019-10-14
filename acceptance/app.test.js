describe("Word Counter", () => {
  beforeEach(async () => {
    await page.goto("http://localhost:3000");
  });

  it("should display a word counter", async () => {
    await expect(page).toMatch("Magic Word Counter");
  });

  /* Write 2 more end to end tests here!
   * Useful documentation:
   * https://github.com/smooth-code/jest-puppeteer
   * https://github.com/GoogleChrome/puppeteer/blob/master/docs/api.md#class-page
   */
});
