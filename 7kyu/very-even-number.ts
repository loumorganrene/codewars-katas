/**INSTRUCTIONS
 * Return true if the given number is a Very Even number, or false otherwise
 * If a number is a single digit, then it is simply "Very Even" if it itself is even.
 * If it has 2 or more digits, it is "Very Even" if the sum of its digits is "Very Even".
 */
export function isVeryEvenNumber(n: number): boolean {
  while(n >= 10) {
    [...n.toString()].map((num)=> Number(num)).reduce((a, b)=> n= a + b, 0)
  }
  return n % 2 === 0
}