
// -Uppercase letters stands for mothers, lowercase stand for their children, i.e. "A" mother's children are "aaaa".
// -Function input: String contains only letters, uppercase letters are unique.
// Task:
// Place all people in alphabetical order where Mothers are followed by their children, i.e. "aAbaBb" => "AaaBbb".

function findChildren(dancingBrigade) {

    return dancingBrigade.split('').sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase()) || b.localeCompare(a)).join('')
}

console.log(findChildren("aAbaBb"));