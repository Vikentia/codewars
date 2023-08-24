function sum() {
    return [...arguments].reduce((acc, item) => acc + item, 0)
}

console.log(sum(12, 1, 1, 1, 1, 1, 1));//18