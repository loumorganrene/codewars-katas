/**INSTRUCTIONS
 * Given an input string and a dictionary of valid words,
 * return the top 5 most similar words to the input string.
 * Any input that is NOT a letter should be treated as if it is not there. 
 * For example, an input of "$%^" should be treated as "" and 
 * an input of "ab*&1cd" should be treated as "abcd". 
 */

function autocomplete(input, dictionary){
  return dictionary.filter((word)=> word.toLowerCase().slice(0, input.replace(/[\d\W]/g, '').replace('_', '').length) === input.replace(/[\d\W]/g, '').replace('_', '')).slice(0, 5)
}