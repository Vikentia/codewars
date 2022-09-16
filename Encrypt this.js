const encryptThis = text => {
    return text.split(' ').map(item => {
        let sec = item.length < 2 ? '' : item[item.length - 1]
        let mid = item.length <= 2 ? '' : item.slice(2, item.length - 1)
        let end = item.length <= 2 ? '' : item[1]
        return (item[0].codePointAt(0) + sec + mid + end)
    }).join(' ')
}

console.log(encryptThis("The more he saw the less he spoke"));
console.log(encryptThis("The more he saw the less he spoke") === "84eh 109ero 104e 115wa 116eh 108sse 104e 115eokp"); 