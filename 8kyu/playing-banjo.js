/**INSTRUCTIONS
 * Create a function which answers the question "Are you playing banjo?".
 * If your name starts with the letter "R" or lower case "r", you are playing banjo!
 * Names given are always valid strings.
 */

function areYouPlayingBanjo(name) {
  const regexName = /^R/i
  const playBanjo = " plays banjo"
  const dontPlayBanjo = " does not play banjo"
  if (name.match(regexName)){
    return `${name}${playBanjo}`
  } else {
  return `${name}${dontPlayBanjo}`
  }
}