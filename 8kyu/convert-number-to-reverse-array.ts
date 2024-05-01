/** INSTRUCTIONS :
 * 
 * Convert number to reversed array of digits
 * Given a random non-negative number, 
 * you have to return the digits of this number within an array 
 * in reverse order.
 */

export const digitize = (n: number): number[] => {
  const nonNegativeNumber = Math.abs(n)
  const array = [nonNegativeNumber]
  
  return String(array[0]).split('').map(Number).reverse()
};

