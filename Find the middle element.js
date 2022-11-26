function gimme(triplet) {
    let arr = [...triplet].sort((a, b) => a - b)
    return triplet.indexOf(arr[1])
}

console.log(gimme([2, 3, 1]));//0
console.log(gimme([2.1, 3.2, 1.4]));//0
console.log(gimme([5.9, 10.4, 14.2]));//1