const filter_list = (l) => l.filter(i=>typeof i ==='number')
console.log(filter_list([1, 2, 0, 'a', 'b']));