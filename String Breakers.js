function stringBreakers(n, string) {
    const str = string.replace(/[^a-z0-9]/gi, '').split('')
    const res = []
    for (let i = 0; i < str.length; i = i + n) {
        let substr = ''
        for (let j = 0; j < n; j++) {
            if (str[i + j]) substr += str[i + j]
        }
        res.push(substr)
    }
    return res.join('\n')
}

console.log(stringBreakers(5, 'This is an example string'));//'Thisi'+'\n'+'sanex'+'\n'+'ample'+'\n'+'strin'+'\n'+'g'