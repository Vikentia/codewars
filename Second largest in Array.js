function secondLargest(array) {
    return Array.isArray(array)
        ? [...new Set(array.filter(e => typeof e === 'string' || typeof e === 'number').map(Number).filter(e => !(isNaN(e))))].sort((a, b) => b - a)[1]
        : undefined
}

console.log(secondLargest([-32, 11, 43, 55, 0, 11]));