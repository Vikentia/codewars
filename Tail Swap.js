function tailSwap(arr) {
    arr = arr.map(e => e.split(':'))
    return [[arr[0][0], arr[1][1]], [arr[1][0], arr[0][1]]].map(e => e.join(':'));
}

console.log(tailSwap(['abc:123', 'cde:456']));//['abc:456', 'cde:123']