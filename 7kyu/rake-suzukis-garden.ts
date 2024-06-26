/**INSTRUCTIONS
 * Help Suzuki rake his garden!
 * The monastery has a magnificent Zen garden made of white gravel and rocks 
 * and it is raked diligently everyday by the monks. 
 * Suzuki having a keen eye is always on the lookout for anything creeping into the garden 
 * that must be removed during the daily raking such as insects or moss.
 * You will be given a string representing the garden:
 * Rake out any items that are not a rock or gravel and replace them with gravel
 * Returns a string with all items except a rock or gravel replaced with gravel
 */

export function rakeGarden(garden:string):string {
  return garden.split(' ').map((item)=> item === "gravel" || item === "rock" ? item : "gravel").join(' ')
}