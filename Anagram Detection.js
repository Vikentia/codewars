const isAnagram = (a, b) => {
    return a.toLowerCase().split('').sort().join('') === b.toLowerCase().split('').sort().join('')
};

console.log(isAnagram("foefet", "toffee"));