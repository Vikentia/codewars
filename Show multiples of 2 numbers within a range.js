function multiples(s1, s2, s3) {
    const res = []
    for (let i = s1; i < s3; i++) {
        if (!(i % s1) && !(i % s2)) res.push(i)
    }
    return res
}

console.log(multiples(2, 4, 40));//[4, 8, 12, 16, 20, 24, 28, 32, 36]