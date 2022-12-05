function combine(...args) {
    let array = [...args];
    let obj = {};
    for (let i = 0; i < array.length; i++) {
        for (let key in array[i]) {
            obj[key]
                ? obj[key] += array[i][key]
                : obj[key] = args[i][key];
        }
    }
    return obj;
}
const objA = { a: 10, b: 20, c: 30 }
const objB = { a: 3, c: 6, d: 3 }
console.log(combine(objA, objB));