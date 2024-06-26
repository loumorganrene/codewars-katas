/**INSTRUCTIONS
 * Your task is to write a function that takes a string 
 * and return a new string with all vowels removed.
 * 
 * For example, 
 * "This website is for losers LOL!" would become "Ths wbst s fr lsrs LL!".
 * Note: for this kata "y" isn't considered a vowel.
 */

export class Kata {
  static disemvowel(str: string): string {
    const vowelRegex=/[aeiouAEIOU]/
    
    return str.split(vowelRegex).join('');
  }
}