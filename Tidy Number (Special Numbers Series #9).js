function tidyNumber(n) {
    return String(n).split('').every((item, i, arr) => i < arr.length - 1 ? item <= arr[i + 1] : true)
}

console.log(tidyNumber(2789));
console.log(tidyNumber(102));