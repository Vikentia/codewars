function addArrays(array1, array2) {
    let arrayToNumber1 = parseInt(array1.join('')) || 0;
    let arrayToNumber2 = parseInt(array2.join('')) || 0;
    if (!arrayToNumber1 && !arrayToNumber2) return []
    let sum = arrayToNumber1 + arrayToNumber2
    let array = (sum + '').split('').map((e, i, arr) => e !== '-' ? Number(e) : e);
    if (array[0] === '-') {
        array[1] *= -1
        array = array.slice(1)
    }
    return array
}


console.log(addArrays([6, 7], [-3, 7]));
console.log(addArrays([6, 7], [6, 7]));
console.log(addArrays([7], [6, 7]));
console.log(addArrays([-6], [-6, 7]));
console.log(addArrays([], []));