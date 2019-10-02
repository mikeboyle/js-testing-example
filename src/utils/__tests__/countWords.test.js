import countWords from "../countWords";

describe("countWords", () => {
  it("counts the words in an unpuncuated text", () => {
    const text = "One two three four five six";
    expect(countWords(text)).toBe(6);
  });

  it("does not count whitespace", () => {
    // eslint-disable-next-line no-unused-vars
    const text = `   Hello
        This text
    has   lots of
    whitespace
    
    `;
    // write your assertion here
  });

  it("throws an error if the text is undefined", () => {
    /*
     * Write your test here.
     * Hint: https://jestjs.io/docs/en/expect#tothrowerror
     */
  });

  // Write a few more tests here!
});
