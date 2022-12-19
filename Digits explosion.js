function explode(s) {
    let str = ''
    s.split('').forEach(item => {
        for (let i = 0; i < +item; i++) {
            str += item
        }
    })
    return str
}

console.log(explode("102269"));//"12222666666999999999"