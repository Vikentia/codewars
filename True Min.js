function min(a, b) {
    if(a===null) a=0;
    if(b===null) b=0;
    return isNaN(a) || isNaN(b) ? NaN : (a < b) ? a : b;
}

console.log(min(1.5, NaN));