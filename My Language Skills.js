function myLanguages(results) {
    return Object.entries(results)
        .filter(e => e[1] >= 60)
        .sort((a, b) => b[1] - a[1])
        .map(e => e[0])
}

console.log(myLanguages({ "Java": 10, "Ruby": 80, "Python": 65 }));// ["Ruby", "Python"]
console.log(myLanguages({ "Hindi": 60, "Greek": 71, "Dutch": 93 }));//["Dutch", "Greek", "Hindi"]