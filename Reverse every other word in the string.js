function reverse(str) {
    return str.trim().split(' ').map((item, ind) => !(ind % 2) ? item : item.split('').reverse().join('')).join(' ')
}

console.log(reverse("Reverse this string, please!"));
console.log(reverse("I really don't like reversing strings!"));