function every(arr, interval = 1, start = 0) {
    return arr.slice(start).filter((el, ind) => !(ind % interval))
}

console.log(every([0, 1, 2, 3, 4], 1));//[0,1,2,3,4]
console.log(every([0, 1, 2, 3, 4], 3));//[0,3]
console.log(every([0, 1, 2, 3, 4], 3, 1));// [1,4]