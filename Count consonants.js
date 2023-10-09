function consonantCount(str) {
    return str.replaceAll(/[aeiou0-9_ ^&$#]/gi, '').length
}

console.log(consonantCount('bcdfghjklmnpqrstvwxyz'));//21
