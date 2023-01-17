const sumNested = arr => {
    return arr.flat(20).reduce((acc, item) => acc + +item, 0)
};

console.log(sumNested([[1], []]));//1
console.log(sumNested([[1, 2, 3, 4]]));//10
console.log(sumNested([1, [1], [1, [1]], [1, [1], [1, [1]]]]));//8