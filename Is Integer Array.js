function isIntArray(arr) {
  if (!arr) return false
  if (arr.length === 0) return true
  return arr.every(e => e % 1 === 0 && typeof e === 'number')
}

console.log(isIntArray([1, 2, 3, 4]));