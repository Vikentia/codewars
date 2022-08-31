const findMissing = (list) => {
    let digit = Math.abs(list[1] - list[0]) < Math.abs(list[2] - list[1]) ? list[1] - list[0] : list[2] - list[1]
    for (let i = 0; i < list.length; i++) {
        if (list[i] + digit !== list[i + 1]) {
            return list[i] + digit
        }
    }
}



console.log(findMissing([1, 3, 5, 9, 11]));
console.log(findMissing([1, 3, 4]));
console.log(findMissing([-1, -3, -4]));