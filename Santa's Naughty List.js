function findChildren(santasList, children) {
    return [...new Set(santasList.filter(e => children.includes(e)))].sort()
}