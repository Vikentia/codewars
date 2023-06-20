function incrementer(nums) {
    return nums.map((e, i) => (e + i + 1) % 10)
}

console.log(incrementer([4, 6, 7, 1, 3]));//[5, 8, 0, 5, 8]