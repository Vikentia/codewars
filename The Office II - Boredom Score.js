function boredom(staff) {
    let obj = {
        'accounts': 1, 'finance': 2, 'canteen': 10, 'regulation': 3, 'trading': 6,
        'change': 6, 'IS': 8, 'retail': 5, 'cleaning': 4, 'pissing about': 25
    }
    const num = Object.values(staff).map(el => obj[el]).reduce((acc, item) => acc + item, 0)
    return num <= 80 ? 'kill me now' : num < 100 ? 'i can handle this' : 'party time!!'
}

console.log(boredom({
    tim: 'change', jim: 'accounts',
    randy: 'canteen', sandy: 'change', andy: 'change', katie: 'IS',
    laura: 'change', saajid: 'IS', alex: 'trading', john: 'accounts',
    mr: 'finance'
})); //'kill me now'
