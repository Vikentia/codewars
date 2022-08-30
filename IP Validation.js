function isValidIP(str) {
    let arr = str.split('.').filter(item => (+item + '') === item && item >= 0 && item <= 255)
    return arr.length === 4
}

console.log(isValidIP("0.0.0.0"));
console.log(isValidIP("12.255.56.1"));
console.log(isValidIP("137.255.156.100"));
console.log(4, isValidIP(''));
console.log(5, isValidIP('abc.def.ghi.jkl'));
console.log(6, isValidIP('123.456.789.0'));
console.log(7, isValidIP('12.34.56'));
console.log(8, isValidIP('01.02.03.04'));
console.log(9, isValidIP('256.1.2.3'));
console.log(10, isValidIP('1.2.3.4.5'));
console.log(11, isValidIP('123,45,67,89'));
console.log(12, isValidIP('1e0.1e1.1e2.2e2'));
console.log(13, isValidIP(' 1.2.3.4'));
console.log(14, isValidIP('1.2.3.4 '));
console.log(15, isValidIP('12.34.56.-7'));
console.log(16, isValidIP('1.2.3.4\n'));
console.log(17, isValidIP('\n1.2.3.4'));
