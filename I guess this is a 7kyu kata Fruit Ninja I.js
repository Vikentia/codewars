function cutFruits(fruits) {
    const res = [];
    fruits.forEach(el => {
        let n = el.length % 2
        if (fruitsName.includes(el)) {
            res.push(el.slice(0, el.length / 2 + n))
            res.push(el.slice(el.length / 2 + n))
        } else {
            res.push(el)
        }
    })
    return res
}

console.log(cutFruits(["apple", "pear", "banana"]));
console.log(cutFruits(["apple", "pear", "banana", "bomb"]));
console.log(cutFruits(["carambola", "mangosteen", "litchi", "jujube", "lljh"]));
