function automorphic(n) {
    return ('' + n ** 2).endsWith('' + n) ? "Automorphic" : "Not!!"
}

console.log(automorphic(9));
console.log(automorphic(25));