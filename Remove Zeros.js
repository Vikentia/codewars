function removeZeros(nums) {
    let arr = []
    let zero = []
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== 0 && nums[i] !== '0') {
            arr[arr.length] = nums[i]
        } else {
            zero[zero.length] = nums[i]
        }
    }
    return [...arr, ...zero]
}

console.log(removeZeros([7, 2, 3, 0, 4, 6, 0, 0, 13, 0, 78, 0, 0, 19, 14]));
console.log(removeZeros([1, "0", 2, 52, "0", 7, "3", 1, 0, 0]));