var lengthOfSequence = function (arr, n) {
    if (arr.filter(e => e === n).length !== 2) return 0;
    let ind1 = arr.indexOf(n)
    let ind2 = arr.indexOf(n, ind1 + 1)
    return ind2 - ind1 + 1
};

console.log(lengthOfSequence([-7, 6, 2, -7, 4], -7));//4 
console.log(lengthOfSequence([1, 2, 3, 1], 1));//4 