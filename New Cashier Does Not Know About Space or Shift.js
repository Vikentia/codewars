function getOrder(input) {
    const menu = ['burger', 'fries', 'chicken', 'pizza', 'sandwich', 'onionrings', 'milkshake', 'coke']
    menu.forEach(item => {
        let re = new RegExp(`${item}`, 'gi');
        input = input.replace(re, `${item} `)
    })
    let order = input.trim().split(' ')
    let res = []
    menu.forEach(item => {
        for (let i = 0; i < order.length; i++) {
            if (item === order[i]) res.push(item)
        }
    })
    return res.map(item => item[0].toUpperCase() + item.slice(1)).join(' ')
}

console.log(getOrder("milkshakepizzachickenfriescokeburgerpizzasandwichmilkshakepizza"));
//"Burger Fries Chicken Pizza Pizza Pizza Sandwich Milkshake Milkshake Coke"