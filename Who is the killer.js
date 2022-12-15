function killer(suspectInfo, dead) {
    let killers = []
    let obj = {}
    Object.entries(suspectInfo).forEach(item => {
        dead.forEach(dead => {
            item[1].includes(dead) && killers.push(item[0])
        })
    })
    killers.forEach(item => obj[item] ? obj[item] += 1 : obj[item] = 1)
    return Object.entries(obj).sort((a, b) => b[1] - a[1])[0][0]
}

console.log(killer({ 'James': ['Jacob', 'Bill', 'Lucas'], 'Johnny': ['David', 'Kyle', 'Lucas'], 'Peter': ['Lucy', 'Kyle'] }, ['Lucas', 'Bill']));