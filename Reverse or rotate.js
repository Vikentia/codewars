function revrot(str, sz) {
    if (str.length < sz || !sz) return ''
    let arr = []
    let subStr = ''
    str.split('').forEach((item, ind) => {
        subStr += item
        if ((ind + 1) % sz === 0) {
            arr.push(subStr)
            subStr = ''
        }
    })
    return arr.map(item => {
        if (item.split('').reduce((acc, item) => acc += item ** 3, 0) % 2 === 0) {
            return item.split('').reverse().join('')
        } else {
            return item.slice(1) + item[0]
        }
    }).join('')
}

console.log(revrot("123456987654", 6));//"234561876549"
console.log(revrot("123456987653", 6));//"234561356789"
console.log(revrot("66443875", 4));//"44668753"
console.log(revrot("66443875", 8));//"64438756"
console.log(revrot("664438769", 8));//"67834466"
console.log(revrot("123456779", 8));//"23456771"
console.log(revrot("", 8));//''
console.log(revrot("123456779", 0));//''
console.log(revrot("563000655734469485", 4));//"0365065073456944"