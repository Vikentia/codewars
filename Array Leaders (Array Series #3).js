function arrayLeaders(numbers) {
    return numbers.filter((el, i) => el > numbers.slice(i + 1).reduce((acc, item) => acc + item, 0))
}

console.log(arrayLeaders([16, 17, 4, 3, 5, 2]));//[17,5,2]