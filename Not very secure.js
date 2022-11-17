function alphanumeric(string) {
    return (/[0-9a-zA-Z]+/g).test(string) && !/[\s_! ]/gi.test(string)
}

console.log(alphanumeric("Mazinkaiser"));
console.log(alphanumeric("hello world_"));
console.log(alphanumeric("PassW0rd"));
console.log(alphanumeric("     "));