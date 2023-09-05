function getMissingElement(arr) {
    for (let i = 0; i < 10; i++) {
        if (!arr.includes(i)) return i
    }
}

console.log(getMissingElement([0, 5, 1, 3, 2, 9, 7, 6, 4]));//8