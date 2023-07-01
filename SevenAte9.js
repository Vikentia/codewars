function sevenAte9(str) {
    return str.split('').map((el, i, arr) => el === '9' && arr[i - 1] === '7' && arr[i + 1] === '7' ? '' : el).join('')
}

console.log(sevenAte9('7979797'));//'7777'