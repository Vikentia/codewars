function rank(st, we, n) {
    let arr = st.toLowerCase()
        .split`,`
        .map((item, i) => (item.split``.map(v => v.charCodeAt() - 96).reduce((a, b) => a + b, 0) + item.length) * we[i])
    const entries = st.split`,`.map((item, ind) => [arr[ind], item]).sort((a, b) => a[0] === b[0] ? a[1].localeCompare(b[1]) : b[0] - a[0])
    if (!st.length) return "No participants"
    return entries[n - 1] ? entries[n - 1][1] : "Not enough participants"
}

console.log(rank("COLIN,AMANDBA,AMANDAB,CAROL,PauL,JOSEPH", [1, 4, 4, 5, 2, 1], 4));//"PauL"
console.log(rank("Addison,Jayden,Sofia,Michael,Andrew,Lily,Benjamin", [4, 2, 1, 4, 3, 1, 2], 4));//"Benjamin"
console.log(rank("Lagon,Lily", [1, 5], 2));//"Lagon"
console.log(rank("Addison,Jayden,Sofia,Michael,Andrew,Lily,Benjamin", [4, 2, 1, 4, 3, 1, 2], 8));//"Not enough participants"
console.log(rank("", [4, 2, 1, 4, 3, 1, 2], 6));//"No participants"