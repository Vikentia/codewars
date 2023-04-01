function generateShape(integer) {
    return new Array(integer).fill('+'.repeat(integer)).join('\n')
}
console.log(generateShape(3));