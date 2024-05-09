/**INSTRUCTIONS
 * Write function bmi that calculates body mass index (bmi = weight / height2).
 * if bmi <= 18.5 return "Underweight"
 * if bmi <= 25.0 return "Normal"
 * if bmi <= 30.0 return "Overweight"
 * if bmi > 30 return "Obese"
 */

function bmi(weight, height) {
  const heightPow = Math.pow(height, 2)
  const bmi = weight / heightPow
  
  switch (true){
      case bmi <= 18.5:
        return "Underweight"
        break;
      case bmi <= 25.0:
        return "Normal"
        break;
      case bmi <= 30.0:
        return "Overweight"
        break;
      case bmi > 30:
        return "Obese"
        break;  
  }
}