function dbSort(a) {
    const str = []
    const num = []
    a.forEach(e => typeof e === 'string' ? str.push(e) : num.push(e))
    return [...num.sort((a, b) => a - b), ...str.sort((a, b) => a.localeCompare(b))]
}

console.log(dbSort(["Banana", "Orange", "Apple", "Mango", 0, 2, 2]));//[0,2,2,"Apple","Banana","Mango","Orange"]
console.log(dbSort(["Apple", 46, "287", 574, "Peach", "3", "69", 78, "Grape", "423"]));
//[46, 78, 574, '287', '3', '423', '69', 'Apple', 'Grape', 'Peach'] 