function accum(s) {
    return s.split('').map((item, index) => item.toUpperCase() + item.toLowerCase().repeat(index)).join('-')
}

console.log(accum("ZpglnRxqenU"));
console.log(accum("NyffsGeyylB"));
