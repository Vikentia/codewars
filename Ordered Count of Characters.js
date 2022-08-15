// Count the number of occurrences of each character and return it as a list of tuples in order of appearance. For empty output return an empty list.
// Example:
// orderedCount("abracadabra") == [['a', 5], ['b', 2], ['r', 2], ['c', 1], ['d', 1]]

const orderedCount = (text) => {
    const str = [...new Set(text.split(''))];
    let arr = []
    for(let i=0;i<str.length; i++){
        arr.push([str[i], text.split('').filter(s=>s===str[i]).length])
    }
    return arr
}

console.log(orderedCount("abracadabra"));

