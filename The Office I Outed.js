function outed(meet, boss) {
    const arr = Object.entries(meet).map(el => el[0] === boss ? el[1] * 2 : el[1])
    return arr.reduce((acc, item) => acc + item, 0) / arr.length <= 5 ? 'Get Out Now!' : 'Nice Work Champ!'
}

console.log(outed({ 'tim': 0, 'jim': 2, 'randy': 0, 'sandy': 7, 'andy': 0, 'katie': 5, 'laura': 1, 'saajid': 2, 'alex': 3, 'john': 2, 'mr': 0 }, 'laura'));//'Get Out Now!'
console.log(outed({ 'tim': 1, 'jim': 3, 'randy': 9, 'sandy': 6, 'andy': 7, 'katie': 6, 'laura': 9, 'saajid': 9, 'alex': 9, 'john': 9, 'mr': 8 }, 'katie'));//'Nice Work Champ!'
console.log(outed({ 'tim': 2, 'jim': 4, 'randy': 0, 'sandy': 5, 'andy': 8, 'katie': 6, 'laura': 2, 'saajid': 2, 'alex': 3, 'john': 2, 'mr': 8 }, 'john'));//'Get Out Now!'