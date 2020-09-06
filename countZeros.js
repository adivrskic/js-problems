//given an array of all 1s followed by all 0s, count the # of zeros

function countZeros(arr) {
  if (arr.length === 1) return arr[0] === 0 ? 1 : 0;
  return (
    countZeros(arr.slice(0, Math.floor(arr.length / 2))) +
    countZeros(arr.slice(Math.floor(arr.length / 2)))
  );
}
