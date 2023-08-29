function divisibleByThree(str) {
    return str.split('').reduce((acc, item) => acc + +item, 0) % 3 === 0
}

console.log(divisibleByThree('19254'));