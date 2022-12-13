function vowelOne(s) {
    return s.split('').map(item => 'aeiouAEIOU'.includes(item) ? 1 : 0).join('')
}

console.log(vowelOne("123, arou"));