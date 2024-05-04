/**INSTRUCTIONS
 * There are pillars near the road. 
 * The distance between the pillars is the same and the width of the pillars is the same. 
 * Your function accepts three arguments:
 **** - number of pillars (≥ 1);
 **** - distance between pillars (10 - 30 meters);
 **** - width of the pillar (10 - 50 centimeters).
 * Calculate the distance between the first and the last pillar in centimeters 
 * (without the width of the first and last pillar).
 */

function pillars(numPill, dist, width) {
  
  const distInMeter = dist * 100
  const newWidth = width * 2
  const totalPillWidth = (numPill * width) - newWidth
  const totalPillDist = (numPill * distInMeter) - distInMeter
  const solution = totalPillWidth + totalPillDist
  
  if (numPill < 1) {
    return;
  };
  
  if (distInMeter < 1000 || distInMeter > 3000) {
    return;
  };
  
  if (width < 10 || width > 50) {
    return;
  }
  
  if (solution < 0) {
    return 0;
  }
    
  return solution
};