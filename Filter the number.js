var filterString = function (value) {
    return Number(value.match(/[0-9]/g).join(''))
}

console.log(filterString("a1b2c3"));//123