function hamming(a, b) {
    let res = 0;
    for (let i = 0; i < a.length; i++) {
        if (a[i] !== b[i]) res++
    }
    return res;
}

console.log(hamming("hello world", "hello tokyo"));//4