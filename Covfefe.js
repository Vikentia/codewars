function covfefe(str) {
    return str.includes("coverage") ? str.replaceAll("coverage", "covfefe") : str + " covfefe"
}

console.log(covfefe("coverage coverage"));