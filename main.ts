/**
 * @author Nicholas Sun
 * @version 1.0.0
 * @date 2025-12-13
 * @fileoverview Sentence
 */

const sentence: string = prompt("Enter a sentence.") || "";
const word: string = prompt("Enter a word.") || "";

// https://www.geeksforgeeks.org/typescript/typescript-string-includes-method/
if (sentence.includes(word)) {
  console.log(
    `Horray! The word '${word}' was found in the sentence: ${sentence}`,
  );
} else {
  console.log(
    `The word '${word}' was not found in the sentence: ${sentence}`,
  );
}
