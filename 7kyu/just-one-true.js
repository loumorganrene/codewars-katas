/**INSTRUCTIONS
 * Create a function called one that accepts two params:
 * a sequence
 * a function
 * and returns true only if the function in the params 
 * returns true for exactly one (1) item in the sequence. 
 */

function one(arr, fun){
  let trueItems = 0;

  arr.map((item)=> {
    if(fun(item)) {
      trueItems++
    }
  })
  
  if(trueItems > 1) {
    return false;
  }
  
  return arr.some(fun) 
}