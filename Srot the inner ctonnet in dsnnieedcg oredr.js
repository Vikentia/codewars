function sortTheInnerContent(words) {
    return words.split(' ').map(item => {
        return item.length > 3
            ? item[0] + item.slice(1, item.length - 1).split('').sort((a, b) => b.localeCompare(a)).join('') + item[item.length - 1]
            : item
    }).join(' ');
}

console.log(sortTheInnerContent("sort the inner content in descending order"));
console.log(sortTheInnerContent("wait for me"));
console.log(sortTheInnerContent("this kata is easy"));