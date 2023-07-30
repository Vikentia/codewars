function hydrate(s) {
    let n = s.split(/[^0-9]/g).map(e => +e).reduce((acc, item) => acc + item, 0)
    return n === 1 ? "1 glass of water" : `${n} glasses of water`
}

console.log(hydrate("1 shot, 5 beers, 2 shots, 1 glass of wine, 1 beer"));
//"10 glasses of water"
console.log(hydrate("1 beer"));
  //"1 glass of water"