function moveZeros(arr) {
    let zeros = arr.filter(item => typeof item === 'number' && item === 0)
    return arr.filter(item => item !== 0).concat(zeros)
}

console.log(moveZeros([1, 2, 0, 1, 0, 1, 0, 3, 0, 1])); //[1, 2, 1, 1, 3, 1, 0, 0, 0, 0]
console.log(moveZeros([false, 1, 0, 1, 2, 0, 1, 3, "a"])); // [false,1,1,2,1,3,"a",0,0]