function sillycase(silly) {
    let middle = Math.ceil(silly.length / 2)
    return silly.slice(0, middle).toLowerCase() + silly.slice(middle).toUpperCase()
}

console.log(sillycase('foobar'));
console.log(sillycase('brian'));