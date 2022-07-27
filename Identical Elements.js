// Given two arrays of integers m and n, test if they contain at least one identical element.Return true if they do; false if not.

// Your code must handle any value within the range of a 32 - bit integer, and must be capable of handling either array being empty(which is a false result, as there are no duplicated elements).

function duplicateElements(m, n) {
    for (let i = 0; i < m.length; i++) {
        if (n.includes(m[i])) return true
    }
    return false
}

console.log(duplicateElements([1, 2, 3, 4, 5], [1, 6, 7, 8, 9]));
console.log(duplicateElements([9, 8, 7], [8, 1, 3]));