// a recursive function that returns the factorial of the passed in value

function factorial(val){
    if(val === 0) return 1;
    return val * factorial(val - 1);
}
