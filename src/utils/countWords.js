/**
 * Count the number of words in a string.
 *  Throws an error if text is blank, undefined, not a string, etc.
 *
 *  Because this function's purpose is to be a scrappy word counter rather than a full-blown tokenizer,
 *  we are simply splitting on white space and not making any efforts to strip punctuation.
 *  ["Hello,", "how", "are", "you?"] has exactly the same length as ["Hello", "how", "are", "you"]
 *
 *  I also didn't want to dive too deep for this MVP version into whether numerals or emojis are words.
 *  For now, if it's between two chunks of whitespace and it is a string, it is a word.
 *
 *  Sadly this means that obvious mistakes like "Hello !" will count as two words. These corner cases are the
 *  tradeoff we accept in exchange for not going down a rabbit hole with punctuation regexes that may never be complete.
 *  We would have to account for non-ASCII punctuation like curly quotes, brackets and periods used in other languages,
 *  etc. This could easily have the unintended side effects of ignoring actual words in non-English languages.
 *  It would be better to use a library (e.g. Python NLTK) for this sort of thing.
 *
 *  Credit for using match instead of split: https://blog.tompawlak.org/split-string-into-tokens-javascript
 *
 */
export default function countWords(text) {
  if (validateText(text)) {
    const words = text.match(/\S+/g);
    return words.length;
  } else {
    throw new Error(
      "Your text seems to be blank. Please type something and try again."
    );
  }
}

/**
 *  Returns true if the text is valid for our purposes (it is a string, and it is not blank).
 *  We check text.trim() to screen out blank text that has characters, such as "   " or "\n\n"
 *  Check isString && text.trim() in that order so we don't try to call .trim() on non-strings.
 *  (The expression will short circuit if `isString` is false.)
 */

function validateText(text) {
  const isString = typeof text === "string" || text instanceof String;
  return !!(isString && text.trim());
}
