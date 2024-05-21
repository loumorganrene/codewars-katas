/**INSTRUCTIONS
 * Create a function any that accepts two params:
 * an array and a function
 * and returns true if the function in the params 
 * returns true for any item in the array. 
 * Otherwise, it should return false.
 */
function any(arr, fun){
  if(arr.length === 0) {
    return false
  }
  
  return arr.some((item) => fun(item) === true) ? true : false
}