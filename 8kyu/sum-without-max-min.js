/**INSTRUCTION
 * Sum all the numbers of a given array, except the highest and the lowest element.
 * The highest or lowest element respectively is a single element at each edge, 
 * even if there are more than one with the same value.
 * If an empty value is given instead of an array, 
 * or the given array is an empty list or a list with only 1 element, return 0.
 */

function sumArray(array) {
  
  return !array || !array.length || array.length === 1 ? 0 : array.reduce((a, b)=> a + b) - Math.min.apply(null, array) - Math.max.apply(null, array)
}