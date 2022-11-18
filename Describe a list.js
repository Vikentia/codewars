function describeList(x) {
    return x.length > 1 ? "longer" : x.length === 1 ? "singleton" : "empty"
}

console.log(describeList([]));
console.log(describeList([1]));
console.log(describeList([1, 2]));
