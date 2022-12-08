function sentence(List) {
    return List
        .map(obj => [+Object.keys(obj), ...Object.values(obj)])
        .sort((a, b) => a[0] - b[0])
        .map(el => el[1])
        .join(' ')
}

console.log(sentence([
    { '4': 'dog' }, { '2': 'took' }, { '3': 'his' },
    { '-2': 'Vatsan' }, { '5': 'for' }, { '6': 'a' }, { '12': 'spin' }
]));