function diamond(n) {
    if (n < 0 || n % 2 === 0) return null
    if (n === 1) return '*\n'
    let deep = Math.round(n / 2)
    let start = []
    for (let i = 1; i <= deep; i++) {
        let stars = '*'.repeat(2 * i - 1)
        let spaces = ' '.repeat(deep - i)
        start.push(spaces + stars + '\n')
    }
    console.log(start);
    let end = [...start]
    end.pop()
    end.reverse()
    return start.concat(end).join('');
}

console.log(diamond(5) === "  *\n ***\n*****\n ***\n  *\n");
console.log(diamond(5));