// recursive function that returns the product of all of the values of 
// the passed in array

function productOfArray(arr) {
  if(arr.length === 0) return 1;
  return arr[0] * productOfArray(arr.slice(1))
}
