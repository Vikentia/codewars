function mxdiflg(a1, a2) {
    let max = 0;
    a1.forEach(e => {
        a2.forEach(e2 => {
            max = Math.abs(e.length - e2.length) > max ? Math.abs(e.length - e2.length) : max
        })
    })
    return max
}
var s1 = ["hoqq", "bbllkw", "oox", "ejjuyyy", "plmiis", "xxxzgpsssa", "xxwwkktt", "znnnnfqknaz", "qqquuhii", "dvvvwz"];
var s2 = ["cccooommaaqqoxii", "gggqaffhhh", "tttoowwwmmww"];
console.log(mxdiflg(s1, s2));//13