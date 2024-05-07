/**INSTRUCTIONS
 * You'll have to translate a string to Pilot's alphabet (NATO phonetic alphabet).
 * There is a preloaded dictionary that you can use, named NATO. It uses uppercase keys, e.g. NATO['A'] is "Alfa". See comments in the initial code to see how to access it in your language.
 * The set of used punctuation is ,.!?.
 * Punctuation should be kept in your return string, but spaces should not.
 * Xray should not have a dash within.
 * Every word and punctuation mark should be seperated by a space ' '.
 * There should be no trailing whitespace
 */

var NATO = ['Alfa', 'Bravo', 'Charlie',
'Delta', 'Echo', 'Foxtrot', 'Golf', 'Hotel', 'India',
'Juliett', 'Kilo', 'Lima', 'Mike', 'November', 'Oscar',
'Papa', 'Quebec', 'Romeo', 'Sierra', 'Tango', 'Uniform',
'Victor', 'Whiskey', 'Xray', 'Yankee', 'Zulu'];

function toNato(words) {
  return Array.from(words).map((letter)=> letter.match(/[,.!?]/g) ? letter : NATO[letter.toUpperCase()]).filter(item=>item).join(' ').toString();
}