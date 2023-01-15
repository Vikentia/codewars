function nerdify(txt) {
    return txt.replace(/a/gi, 4).replace(/e/gi, 3).replace(/l/g, 1)
}

console.log(nerdify("Seven"));//"S3v3n"