// given a sorted array of integers and a target average, determine if 
// there is a pair of values in the array where average of the the pair
// of values equals the target average

const averagePair = (arr, avg) => {
  let first = 0;
  let second = arr.length -1;
  
  while(first < arr.length && second > 0) {
    if((arr[first] + arr[second]) / 2 > avg) second--;

    if((arr[first] + arr[second]) / 2 < avg) first++;
    
    if((arr[first] + arr[second]) / 2 === avg) return true;
  }
  
  return false;
}
