function isAValidMessage(message) {
    if (!message) return true
    if (!(/[0-9]/).test(message[0])) return false
    const numArray = message.split(/[a-z]+/gi).filter(e => e)
    const letterArray = message.split(/[0-9]+/g).filter(e => e)
    return letterArray.every((e, i) => e.length === +numArray[i] && letterArray.length === numArray.length)
}

console.log(isAValidMessage("3hey5hello2hi"));
console.log(isAValidMessage("1a2bb3ccc4dddd5eeeee"));
console.log(isAValidMessage("3hey5hello2hi5"));
console.log(isAValidMessage("code4hello5"));