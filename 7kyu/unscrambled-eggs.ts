/**INSTRUCTIONS
 * The string given to your function has had an "egg" inserted directly after each consonant. 
 * You need to return the string before it became eggcoded.
 */

function unscrambleEggs(word: string): string{
  return word.replace(/egg/g, "")
}