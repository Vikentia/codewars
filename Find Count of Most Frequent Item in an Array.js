function mostFrequentItemCount(collection) {
    let max = 0
    let arr = [...new Set(collection)]
    arr.forEach(e => max = collection.filter(item => item === e).length > max ? collection.filter(item => item === e).length : max)
    return max
}

console.log(mostFrequentItemCount([3, -1, -1, -1, 2, 3, -1, 3, -1, 2, 4, 9, 3]));//5