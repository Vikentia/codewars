function whoseBicycle(diary1, diary2, diary3) {
    let children = []
    let str = ['first', 'second', 'third']
    const ages = [14, 9, 8]
    new Array(diary1, diary2, diary3).forEach((item, i) => {
        children.push({ 'score': Object.values(item).reduce((acc, item) => acc + item, 0), 'ages': ages[i], 'child': str[i] })
    })
    children.sort((a, b) => {
        return a['score'] === b['score'] ? a['ages'] - b['ages'] : b['score'] - a['score']
    })
    return `I need to buy a bicycle for my ${children[0].child} son.`
}

const diary1 = {
    'algebra': 6,
    'history': 7,
    'physics': 8,
    'geography': 9,
    'chemistry': 10
}
const diary2 = {
    'algebra': 8,
    'history': 7,
    'physics': 8,
    'geography': 9,
    'chemistry': 10
}
const diary3 = {
    'algebra': 6,
    'history': 5,
    'physics': 5,
    'geography': 9,
    'chemistry': 10
}
console.log(whoseBicycle(diary1, diary2, diary3)); //'I need to buy a bicycle for my second son.'
console.log(whoseBicycle(
    {
        'algebra': 6,
        'history': 7,
        'physics': 8,
        'geography': 9,
        'chemistry': 10
    },
    {
        'algebra': 6,
        'history': 7,
        'physics': 8,
        'geography': 9,
        'chemistry': 10
    },
    {
        'algebra': 6,
        'history': 7,
        'physics': 8,
        'geography': 9,
        'chemistry': 10
    }
));
