/**INSTRUCTIONS
 * Return a boolean true if all rotations of strng are included in arr, 
 * otherwise return false otherwise
 */

export function containAllRots(str: string, arr: string[]): boolean {
  let rotations: string[]= []
  
  for(let i= 0; i < str.length; i++) {
    let rotation = str.slice(i) + str.slice(0, i)
    rotations.push(rotation)
  }
  
  for(const rotation of rotations) {
    if(!arr.includes(rotation)){
      return false
    }
  }
  
  return true
}