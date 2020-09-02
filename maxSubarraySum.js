// finds the maximum sum of a subarray of 'arr' with length 'num'

function maxSubarraySum(arr, num) {
  let current = 0;
  let index = 0;
  let count = 0;
  let max = 0;
  let compareMax = 0;

  if(arr.length < num) return null;

  while (current <= arr.length - 1) {
    max += arr[current];
    count++;
    current++;

    if(count === num) {
      if(max > compareMax) compareMax = max;
      max = 0;
      current = ++index;
      count = 0;
    }
  }

  return compareMax;
}
