function makeString(s) {
    return s.split(' ').map(e => e[0]).join('')
}

console.log(makeString("kaks de gan has a big head"));//"kdghabh"