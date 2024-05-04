/**INSTRUCTIONS
 * Complete the square sum function so that it squares each number passed into it 
 * and then sums the results together.
 */

function squareSum(numbers){
  
  if (!numbers && numbers.length === 0 && Array.isArray(numbers)) {
    return 0
  }
  
 const squaredNumber = numbers.map((number)=> Math.pow(number, 2))
 
 return squaredNumber.reduce((a, b)=> a + b, 0)

}