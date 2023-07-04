function mostLikely(prob1, prob2) {
    return prob1.split(':')[0] / prob1.split(':')[1] > prob2.split(':')[0] / prob2.split(':')[1]
}

console.log(mostLikely('1:3', '1:2'));