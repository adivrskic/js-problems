// a recursive function that returns the power of the base to the exponent

function power(base, exp){
    if(exp === 0) return 1;
    return base * power(base, exp - 1);
}
