function pattern(n) {
    let output = [];
    for (let i = 1; i <= n; i++) {
        output.push(('' + i).repeat(i))
    }
    return output.join('\n');
}

console.log(pattern(5));