function solve(n) {
    if (n % 10) return -1
    let count = 0
    while (n) {
        if (n >= 500) {
            n = n - 500;
            count++;
        } else if (n >= 200) {
            n = n - 200;
            count++;
        } else if (n >= 100) {
            n = n - 100;
            count++;
        } else if (n >= 50) {
            n = n - 50;
            count++;
        } else if (n >= 20) {
            n = n - 20;
            count++;
        } else if (n >= 10) {
            n = n - 10;
            count++;
        }
    }
    return count
}

console.log(solve(770));//4
console.log(solve(550));//2
console.log(solve(10));//1
console.log(solve(42));//-1