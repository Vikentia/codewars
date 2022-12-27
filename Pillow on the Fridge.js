function pillow(s) {
    for (let i = 0; i < s[0].length; i++) {
        if (s[0][i] === 'n' && s[1][i] === 'B') {
            return true
        }
    }
    return false
}

console.log(pillow(['uovopwxqrrxzvvrxwwwovnrvy', 'opuzBonzzvBwnBswuBzxrtvrs']));
console.log(pillow(['zorpnwzpptsut', 'Brvxyqvuruous']));
console.log(pillow(['qzBxnnrqqurxzB', 'ynBxqurwxwysty']));
console.log(pillow(['rnBvvrtpz', 'nBzoywnrx']));