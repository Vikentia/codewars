function inArray(array1, array2) {
    return array1.filter(item => array2.some(elem => elem.includes(item))).sort()
}

console.log(inArray(["xyz", "live", "strong"], ["lively", "alive", "harp", "sharp", "armstrong"])); //["live", "strong"]

