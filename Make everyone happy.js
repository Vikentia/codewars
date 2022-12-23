function smile(text) {
    return [...text].map((item, ind) => {
        if ((item === '(' || item === '[') && /[:;=~-]/g.test(text[ind - 1])) {
            return item === '(' ? ')' : "]"
        }
        return item
    }).join('')
}

console.log(smile('Howdy :('));

