function decipherThis(str) {
    return str.split(' ').map(item => {
        let numPart = parseInt(item)
        let strPart = item.replace(/[0-9]/g, '')
        if (strPart === '') {
            return String.fromCharCode(numPart)
        } else {
            strPart = strPart.split('')
            if (strPart.length > 1) {
                [strPart[0], strPart[strPart.length - 1]] = [strPart[strPart.length - 1], strPart[0]]
            }
            return String.fromCharCode(numPart) + strPart.join('')
        }
    }).join(' ')
};

console.log(decipherThis('72eva 97 103o 97t 116sih 97dn 115ee 104wo 121uo 100o'))
console.log(decipherThis('72eva 97 103o 97t 116sih 97dn 115ee 104wo 121uo 100o') === 'Have a go at this and see how you do');