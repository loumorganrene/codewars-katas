/**INSTRUCTIONS
 * You'll be given a list of two strings, and each will contain exactly one colon (":")
 * in the middle (but not at beginning or end). 
 * The length of the strings, before and after the colon, are random.
 * Your job is to return a list of two strings (in the same order as the original list),
 *  but with the characters after each colon swapped.
 */

export function tailSwap(arr: [string,string]): [string,string] {
  let newArr: [string, string][] = []
  const firstItem = arr[0].split(':')[0] + ':' + arr[1].split(':')[1]
  const secondItem = arr[1].split(':')[0] + ':' + arr[0].split(':')[1]

  newArr.push([firstItem, secondItem])

  return newArr[0];
}