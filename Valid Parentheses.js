function validParentheses(parens) {
    if (parens.length % 2) return false
    let stack = []
    for (let i = 0; i < parens.length; i++) {
        let current = parens[i]
        if (current === '(') {
            stack.push(current)
        } else {
            if ('(' !== stack.pop()) return false
        }
    }
    return stack.length === 0
}

console.log(validParentheses("("));
console.log(validParentheses(""));
console.log(validParentheses("()))"));
console.log(validParentheses("(())((()())())"));