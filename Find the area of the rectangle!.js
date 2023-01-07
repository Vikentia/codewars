function area(d, l) {
    if (d <= l) return "Not a rectangle";
    let k = Math.sqrt(d * d - l * l)
    return k * l % 1 ? +(k * l).toFixed(2) : k * l
}

console.log(area(5, 4));//12