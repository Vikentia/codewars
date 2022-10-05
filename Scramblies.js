function scramble(str1, str2) {
    let obj = {}
    for (let l of str1) obj[l] ? obj[l]++ : (obj[l] = 1)
    for (let l of str2) {
        if (obj[l]) {
            obj[l]--
        } else {
            return false
        }
    }
    return true
}

console.log(scramble('rkqodlw', 'world'));
console.log(scramble('cedewaraaossoqqyt', 'codewars'));
console.log(scramble('katas', 'steak'));