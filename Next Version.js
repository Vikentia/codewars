function nextVersion(version) {
    let arr = version.split('.')
    arr = arr.map((n, i) => i === arr.length - 1 ? ++n : +n)
    for (let i = arr.length - 1; i < arr.length && i > 0; i--) {
        if (arr[i] > 9) {
            arr[i] = 0
            arr[i - 1] += 1
        }
    }
    return arr.join('.')
}

console.log(nextVersion("1.2.3"));//"1.2.4"
console.log(nextVersion("0.9.9"));//"1.0.0"
console.log(nextVersion("1"));//"2"
console.log(nextVersion("1.2.3.4.5.6.7.8"));//"1.2.3.4.5.6.7.9"
console.log(nextVersion("9.9"));//"10.0"