function cakes(recipe, available) {
    let count = 0
    while (true) {
        for (let item in recipe) {
            if (!available[item]) {
                return count
            }
            if (available[item] - recipe[item] < 0) {
                return count
            } else {
                available[item] -= recipe[item]
            }
        }
        count++
    }
}

let recipe = { flour: 500, sugar: 200, eggs: 1 };
let available = { flour: 1200, sugar: 1200, eggs: 5, milk: 200 };
console.log(cakes(recipe, available));//2
recipe = { apples: 3, flour: 300, sugar: 150, milk: 100, oil: 100 };
available = { sugar: 500, flour: 2000, milk: 2000 };
console.log(cakes(recipe, available));//0