function removeRotten(bagOfFruits) {
    return bagOfFruits ? bagOfFruits.map(e => e.startsWith('rotten') ? e.slice(6).toLowerCase() : e) : []
}

console.log(removeRotten(["apple", "banana", "kiwi", "melone", "orange"]));//["apple","banana","kiwi","melone","orange"]