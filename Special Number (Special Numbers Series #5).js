function specialNumber(n) {
    return n.toString().split('').every(el => +el < 6) ? "Special!!" : "NOT!!"
}

console.log(specialNumber(25432));//"Special!!"
console.log(specialNumber(9));//"NOT!!"