function toCamelCase(str) {
    return str.split(/[-_]/g).map((e, i) => !i ? e : e[0].toUpperCase() + e.slice(1)).join('')
}

console.log(toCamelCase("the-stealth-warrior"));
console.log(toCamelCase("The_Stealth_Warrior"));