function predictAge(...args) {
    return Math.floor(Math.sqrt(args.map(e => e * e).reduce((acc, item) => acc + item)) / 2)
}

console.log(predictAge(65, 60, 75, 55, 60, 63, 64, 45));//86