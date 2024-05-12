/**INSTRUCTIONS
 * You have to write a calculator that receives strings for input. 
 * The dots will represent the number in the equation. There will be dots on one side, an operator, and dots again after the operator. 
 * The dots and the operator will be separated by one space. 
 * You'll have to return a string that contains dots, as many the equation returns. 
 * If the result is 0, return the empty string. 
 * When it comes to subtraction, the first number will always be greater than or equal to the second number.
 */
function dotCalculator (equation) {
  const arr = Array.from(equation.split(' '))
  const firstNumber = Number(arr[0].length)
  const secondNumber = Number(arr[2].length)
  const operator = arr[1]
  let resultToNumber = 0
      
  switch(operator) {
      case '+':
        resultToNumber = firstNumber + secondNumber
      break
      case '-':
        resultToNumber = firstNumber - secondNumber
      break
      case '*':
        resultToNumber = firstNumber * secondNumber
      break
      case '//':
        resultToNumber = firstNumber / secondNumber
      break
  }
  
  const resultToDot = '.'.repeat(resultToNumber)

  return resultToDot
}