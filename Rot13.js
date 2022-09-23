function rot13(message) {
    const re = /[a-z]/gi
    return message.split('').map(item => {
        let ind = item.codePointAt(0)
        let newInd = 0
        if (ind >= 65 && ind <= 90) {
            newInd = ind + 13
            if (newInd > 90) newInd = newInd - 90 + 64
        }
        if (ind >= 97 && ind <= 122) {
            newInd = ind + 13
            if (newInd > 122) newInd = newInd - 122 + 96
        }
        return item.match(re) ? String.fromCodePoint(newInd) : item
    }).join('')
}

console.log(rot13("test"));//"grfg"
console.log(rot13("test, Test!"));
