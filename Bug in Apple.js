function sc(apple) {
    const answer = []
    apple.forEach((el, ind) => {
        if (el.includes('B')) {
            answer.push(ind)
            el.forEach((item, i) => {
                item === 'B' && answer.push(i)
            })
        }
    })
    return answer
}

console.log(sc([["A", "A", "A", "A", "A"],
["A", "A", "A", "A", "A"],
["A", "A", "A", "A", "A"],
["A", "A", "A", "A", "A"],
["A", "B", "A", "A", "A"]
])); //[4,1]