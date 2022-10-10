function backwardsPrime(start, stop) {
    let arr = []
    for (let i = start; i <= stop; i++) {
        if (isPrime(i) && isReversePrime(i)) {
            arr.push(i);
        }
    }
    return arr
}

function isPrime(num) {
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}

function isReversePrime(num) {
    let reverseNum = +num.toString().split("").reverse().join("");
    if (num !== reverseNum) {
        return isPrime(reverseNum);
    }
    return false;
}

console.log(backwardsPrime(2, 100));//[13, 17, 31, 37, 71, 73, 79, 97]
console.log(backwardsPrime(9900, 10000));//[9923, 9931, 9941, 9967]