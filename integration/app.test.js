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
  it("should count the words in a text", async () => {
    await page.type('[name="wordCounterInput"]', "Goodbye World!");
    await page.click('[data-testid="wordCounterSubmit"]');
    await expect(page).toMatch("Total length: 2 words");
  });

  it("displays an error when there is no text", async () => {
    await page.click('[data-testid="wordCounterSubmit"]');
    await expect(page).toMatch(
      "Your text seems to be blank. Please type something and try again."
    );
  });
});
