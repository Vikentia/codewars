function hidePasswordFromConnection(urlString) {
    let arr = urlString.split(/[&?]/g).map(item => {
        if (item.includes('password')) {
            item = item.split('=')
            item[1] = '*'.repeat(item[1].length)
            item = item[0]+'='+item[1]
        }
        return item
    })
    return arr.join('&').replace('&', '?')
}
console.log(hidePasswordFromConnection("jdbc:mysql://sdasdasdasd:szdasdasd:dfsdfsdfsdf/sdfsdfsdf?user=root&password=12345"));