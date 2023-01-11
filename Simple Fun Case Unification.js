function caseUnification(s) {
    let count = 0;
    s.split('').forEach(el => el === el.toUpperCase() && count++)
    return count > s.length - count ? s.toUpperCase() : s.toLowerCase()
}

console.log(caseUnification("Aba"));
console.log(caseUnification("ABa"));