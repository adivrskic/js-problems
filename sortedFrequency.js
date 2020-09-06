function sortedFrequency(arr, n) {
  let min = 0;
  let max = arr.length - 1;
  let middle = Math.floor(arr.length / 2);
  let count = 0;

  while (min < max) {
    if (arr[middle] < n) {
      min = middle;
      middle = middle + Math.floor(max - middle);
    } else if (arr[middle] > n) {
      max = middle;
      middle = Math.floor(middle / 2);
    } else {
      count++;
      let left = middle - 1;
      let right = middle + 1;

      while (arr[left] === n) {
        count++;
        left--;
      }

      while (arr[right] === n) {
        count++;
        right++;
      }

      break;
    }
  }

  return count;
}
