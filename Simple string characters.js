function solve(s) {
    return [s.replace(/[^A-Z]/g, '').length, s.replace(/[^a-z]/g, '').length, s.replace(/[^0-9]/g, '').length, s.replace(/[a-z0-9]/gi, '').length]
}

console.log(solve("Codewars@codewars123.com"));//[1,18,3,2]