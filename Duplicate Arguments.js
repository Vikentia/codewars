function solution(...args) {
    return args.length !== [...new Set(args)].length
}

console.log(solution('a', 'b', 'c', 'a'));