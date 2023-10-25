function solve(a) {
    let even = 0
    let odd = 0
    a.filter(el => typeof el === 'number').forEach(el => el % 2 ? odd++ : even++)
    return even - odd
};

console.log(solve([0, 1, 2, 3, 'a', 'b']));//0