function encrypt(text, n) {
    if (text == null) return null
    if (text.length < 2) return text
    for (let i = 1; i <= n; i++) {
        let arr1 = []
        let arr2 = [];
        text.split('').forEach((el, ind) => ind % 2 ? arr2.push(el) : arr1.push(el))
        text = arr2.concat(arr1).join('')
        arr1.length = 0;
        arr2.length = 0
    }
    return text
}

function decrypt(encryptedText, n) {
    if (encryptedText == null) return null
    if (encryptedText.length < 2) return encryptedText
    let oddNum = [], evenNum = []
    for (let i = 1; i <= n; i++) {
        oddNum.push(...encryptedText.slice(encryptedText.length / 2).split(''))
        evenNum.push(...encryptedText.slice(0, encryptedText.length / 2).split(''))
        let newString = []
        for (let i = 0; i < encryptedText.length; i++) {
            i % 2 === 0 ? newString.push(oddNum.shift()) : newString.push(evenNum.shift())
        }
        encryptedText = newString.join('')
    }
    return encryptedText

}

console.log(encrypt("This is a test!", 2)); //"hsi  etTi sats!"
console.log(decrypt("hsi  etTi sats!", 1)); //"This is a test!"
console.log(decrypt("hskt svr neetn!Ti aai eyitrsig", 1)); //"This is a test!"