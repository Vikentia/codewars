function breakChocolate(n, m) {
    return n <= 0 || m <= 0 ? 0 : n * m - 1
}

console.log(breakChocolate(5, 5));//24