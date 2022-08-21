function validBraces(braces) {
    let stack = [];
    let braskets = {
        ')': '(',
        ']': '[',
        '}': '{',
    }
    for (let i = 0; i < braces.length; i++) {
        let char = braces[i]
        if (isClosedBrasket(char)) {
            if (braskets[char] !== stack.pop()) return false
        } else {
            stack.push(char)
        }
    }
    return stack.length === 0
}
function isClosedBrasket(a) {
    return [')', '}', ']'].includes(a)
}

console.log(validBraces("()))"));
console.log(validBraces("(){}[]"));
console.log(validBraces("([{}])"));
console.log(validBraces("[(])"));