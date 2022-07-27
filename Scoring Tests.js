
function scoreTest(str, right, omit, wrong) {
    return str.map(item => item === 2 ? -wrong : item === 1 ? omit : right).reduce((sum, item) => sum + item, 0)
}

console.log(scoreTest([0, 0, 0, 0, 2, 1, 0], 2, 0, 1)); //9