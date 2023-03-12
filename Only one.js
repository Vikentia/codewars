function onlyOne(...bool) {
    bool.sort();
    return bool[bool.length - 1] && !bool[bool.length - 2]
}

console.log(onlyOne(true, false, false, true));