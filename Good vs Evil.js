function goodVsEvil(good, evil) {
    good = good.split(' ')
    evil = evil.split(' ')
    let goodSum = 1 * good[0] + 2 * good[1] + 3 * good[2] + 3 * good[3] + 4 * good[4] + 10 * good[5]
    let evilSum = 1 * evil[0] + 2 * evil[1] + 2 * evil[2] + 2 * evil[3] + 3 * evil[4] + 5 * evil[5] + 10 * evil[6]
    return goodSum > evilSum
        ? "Battle Result: Good triumphs over Evil"
        : goodSum < evilSum
            ? "Battle Result: Evil eradicates all trace of Good"
            : "Battle Result: No victor on this battle field"

}
console.log(goodVsEvil('1 1 1 1 1 1', '1 1 1 1 1 1 1'));