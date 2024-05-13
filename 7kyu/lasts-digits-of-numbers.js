/**INSTRUCTIONS
 * Your job is to implement a function which returns the last D digits of 
 * an integer N as a list.
 */
function lastDigit(n, d) {
  
  const nArr= Array.from(String(n), Number)
  
    if(d <= 0){
    return []
  }
  
  if(d >= nArr.length){
    return nArr
  }
  
  if(nArr.length === 1){
    return nArr
  }
  
  return nArr.slice(-d)
}