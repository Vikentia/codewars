function last(list) {
    if (Array.isArray(list)) return list[list.length - 1]
    let arr = [...arguments]
    return arr.length === 1 && typeof  arr[0] === 'string' ? arr[0][arr[0].length - 1] : arr[arr.length - 1]
}


console.log(last([1, 2, 3, 4, 5]));
console.log(last("abcde"));
console.log(last(1, "b", 3, "d", 5));