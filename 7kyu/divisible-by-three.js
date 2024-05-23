/**INSTRUCTIONS
 * Complete the function which tests if the sum of its digits is divisible by 3.
 * Avoid using the modulo operator.
 */

function divisibleByThree(str){
  return Number.isInteger(str.split('').map((num) => num).reduce((a, b)=> Number(a) + Number(b)) / 3)
}