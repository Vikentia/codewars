function generateHashtag(str) {
    if (!str.trim()) return false
    const res = str.replace(/[\s]+/g, ' ').split(' ').map(e => (e[0].toUpperCase() + e.slice(1))).join('')
    return res.length <= 139 ? '#' + res : false
}
console.log(generateHashtag("Do We  have A Hashtag"));
console.log(generateHashtag("a".repeat(139)));
console.log(generateHashtag("code" + " ".repeat(140) + "wars"));
console.log(generateHashtag("a".repeat(140)));
console.log(generateHashtag(''));
console.log(generateHashtag(' '));
console.log(generateHashtag(" ".repeat(200)));