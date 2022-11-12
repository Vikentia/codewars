function dup(s) {
    return s.map(word => word.split('').map((letter, ind, arr) => ind === 0 ? letter : letter === arr[ind - 1] ? '' : letter).join(''))
};

console.log(dup(["ccooddddddewwwaaaaarrrrsssss", "piccaninny", "hubbubbubboo"]));
console.log(dup(["abracadabra", "allottee", "assessee"]));
console.log(dup(["kelless", "keenness"]));
console.log(dup(["Woolloomooloo", "flooddoorroommoonlighters", "chuchchi"]));