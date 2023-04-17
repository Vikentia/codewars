var palindromeChainLength = function (n) {
    let step = 0;
    while (n !== +('' + n).split('').reverse().join('')) {
        step++;
        n += +('' + n).split('').reverse().join('')
    }
    return step;
};

console.log(palindromeChainLength(87));//4