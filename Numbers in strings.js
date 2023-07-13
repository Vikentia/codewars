function solve(s) {
    return s.replace(/[^0-9]+/g, ' ').trim().split(' ').map(Number).sort((a, b) => b - a)[0]
};

console.log(solve('f7g42g16hcu5'));//42