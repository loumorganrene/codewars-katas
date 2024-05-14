/**INSTRUCTIONS
 * Given an array of integers.
 * Return an array, where the first element is the count of positives numbers and
 * the second element is sum of negative numbers. 
 * 0 is neither positive nor negative.
 * If the input array is empty or null, return an empty array.
 */

function countPositivesSumNegatives(input) {
  if (!input || input.length === 0) {
    return []
  }
  
  let positives = input.filter((number)=>number > 0 && number !== 0)
  let negatives = input.filter((number)=>number < 0 && number !== 0)

  
  if (negatives.length === 0) {
    return [positives.length, 0] 
    
  } else if (positives.length === 0) {
    return [0, negatives.reduce((a, b) => a + b)]
    
  } else if (positives.length === 0 && negatives.reduce((a, b) => a + b) === 0) {
    return []
  }
    
    return [positives.length, negatives.reduce((a, b) => a + b)] 

}