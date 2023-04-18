function removeParentheses(s) {
    while (s.includes('(') && s.includes(')')) {
        s = s.replace(/\([a-z\s]+\)/gi, '')
    }
    return s
}

console.log(removeParentheses("example (unwanted thing) example"));//"example  example"
console.log(removeParentheses("a(b(c))"));//"a"