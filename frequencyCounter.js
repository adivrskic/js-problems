// given 2 positive integers, find out if the 2 numbers have the 
// same frequency of digits

const sameFrequency = (num1, num2) => {
  let num1Obj = {}
  let num2Obj = {}

  let num1Str = num1.toString();
  let num2Str = num2.toString();

  for(let num of num1Str) {
    num1Obj[num] = (num1Obj[num] || 0) + 1;
  }

  for(let num of num2Str) {
    num2Obj[num] = (num2Obj[num] || 0) + 1;
  }

  for(let key in num1Obj) {
    if(!(key in num2Obj && num2Obj[key] == num1Obj[key])) return false;
  }

  return true;
}
