function menFromBoys(arr) {
    const even = [];
    const odd = [];
    ([...new Set(arr)]).forEach(e => e % 2 ? odd.push(e) : even.push(e));
    return [...even.sort((a, b) => a - b), ...odd.sort((a, b) => b - a)];
}

console.log(menFromBoys([-17, -45, -15, -33, -85, -56, -86, -30]));//[-86,-56,-30,-15,-17,-33,-45,-85]