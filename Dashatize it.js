function dashatize(num) {
    let arr = (Math.abs(num) + '').split('')
    let str = arr.map(item => +item % 2 ? `-${item}-` : item).join('').replace(/\-{2}/g, '-')
    if (str.startsWith('-')) str = str.replace(/^\-/, '')
    if (str.endsWith('-')) str = str.replace(/\-$/, '')
    return str
}

console.log(dashatize(274)); //2-7-4
console.log(dashatize(5311)); //5-3-1-1
console.log(dashatize(86320)); //86-3-20
console.log(dashatize(974302));//9-7-4-3-02
console.log(dashatize(-28369));//28-3-6-9