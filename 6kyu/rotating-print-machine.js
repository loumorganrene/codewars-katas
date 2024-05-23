/**INSTRUCTIONS
 * Create a function named rotate() that accepts a string argument and 
 * returns an array of strings with each letter from the input string being rotated to the end.
 * 
 * Ex: `rotate("Hello") // => ["elloH", "lloHe", "loHel", "oHell", "Hello"]`
 * 
 * Note: The original string should be included in the output array. 
 * The order matters. 
 * Each element of the output array should be the rotated version of the previous element. 
 * The output array SHOULD be the same length as the input string. 
 * The function should return an empty array with a 0 length string, '', as input.
 */

function rotate(str){
  
  let rotations= []
  
  for(let i= 1; i < str.length; i++) {
    let rotation = str.slice(i) + str.slice(0, i)
    rotations.push(rotation)
        console.log({rotation})
  }
  
  rotations.push(str)
  
  return str === "" ? [] : rotations
}