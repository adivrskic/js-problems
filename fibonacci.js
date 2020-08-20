// a recursive function that returns the nth number in the fibonacci sequence

function fib(n){
  if(n <= 1) return n;
  return fib(n - 1) + fib(n - 2);
}
