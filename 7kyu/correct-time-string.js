/**INSTRUCTIONS
 * You have to create a method, that corrects a given time string.
 * There was a problem in addition, so many of the time strings are broken.
 * Time is formatted using the 24-hour clock, so from 00:00:00 to 23:59:59. 
 * If the input-string is null or empty return exactly this value! 
 * If the time-string-format is invalid, return null.
 */

function timeCorrect(timestring) {

  if(timestring === null || timestring === "") { 
    return timestring 
  }
  
  if (!/^\d{2}:\d{2}:\d{2}$/.test(timestring)) {
    return null;
  }
  
  const [hours, minutes, seconds] = timestring.split(":").map(Number)
  
  if (isNaN(hours) || isNaN(minutes) || isNaN(seconds)){
    return null
  }
  
  let newHours = hours
  let newMinutes = minutes
  let newSeconds = seconds
  
  if (newSeconds >= 60) {
    newMinutes += Math.floor(newSeconds / 60)
    newSeconds %= 60
  }
  
  if (newMinutes >= 60) {
    newHours += Math.floor(newMinutes / 60)
    newMinutes %= 60
  }
  
  if (newHours >= 24){
    newHours %= 24
  }
  
  if (newHours === 24) {
    newHours = 0
  }
  
  return `${newHours.toString().padStart(2, '0')}:${newMinutes.toString().padStart(2, '0')}:${newSeconds.toString().padStart(2, '0')}`
}