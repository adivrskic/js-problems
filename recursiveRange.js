// recursive function which adds up all the numbers from 0 to
// the passed in value

function recursiveRange(num) {
  if(num === 0) return 0;
  return num + recursiveRange(num - 1);
}
