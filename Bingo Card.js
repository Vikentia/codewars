function getCard() {
    let arr = [];
    for (let i = 0; i < 5; i++) {
        let r = `B${getRandom(1, 15)}`
        !arr.includes(r) ? arr.push(r) : i--
    }
    for (let i = 0; i < 5; i++) {
        let r = `I${getRandom(16, 30)}`
        !arr.includes(r) ? arr.push(r) : i--
    }
    for (let i = 0; i < 4; i++) {
        let r = `N${getRandom(31, 45)}`
        !arr.includes(r) ? arr.push(r) : i--
    }
    for (let i = 0; i < 5; i++) {
        let r = `G${getRandom(46, 60)}`
        !arr.includes(r) ? arr.push(r) : i--
    }
    for (let i = 0; i < 5; i++) {
        let r = `O${getRandom(61, 75)}`
        !arr.includes(r) ? arr.push(r) : i--
    }
    return arr
}
function getRandom(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

console.log(getCard());