/**INSTRUCTIONS
 * Happy Year is the year with only distinct digits , (e.g) 2018
 * Given a year, Find The next happy year
 * Year Of Course always Positive
 * It's not necessary that the year passed to the function is Happy one
 * Input Year with in range (1000  ≤  y  ≤  9000)
 */
function nextHappyYear(year){
  let newYear= year + 1

  while(true){
    const yearToString= newYear.toString().split('')
    console.log({yearToString})
    let uniqueNumber= new Set(yearToString)
    if(uniqueNumber.size === yearToString.length) {
      return newYear
    } else {
      newYear++
    }
  }
}