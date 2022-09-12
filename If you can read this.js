const nato_alphabet = {
    a: 'Alfa', b: 'Bravo', c: 'Charlie',
    d: 'Delta', e: 'Echo', f: 'Foxtrot',
    g: 'Golf', h: 'Hotel', i: 'India',
    j: 'Juliett', k: 'Kilo', l: 'Lima',
    m: 'Mike', n: 'November', o: 'Oscar',
    p: 'Papa', q: 'Quebec', r: 'Romeo',
    s: 'Sierra', t: 'Tango', u: 'Uniform',
    v: 'Victor', w: 'Whiskey', x: 'Xray',
    y: 'Yankee', z: 'Zulu'
}
function to_nato(words) {
    return words.toLowerCase().replace(/ /g, '').split('').map(item => (/[.,!?]/).test(item) ? item : nato_alphabet[item]).join(' ')
}

console.log(to_nato('If you can read'));//"India Foxtrot Yankee Oscar Uniform Charlie Alfa November Romeo Echo Alfa Delta"
console.log(to_nato('Did not see that coming'));
console.log(to_nato('go for it!')); //"Golf Oscar Foxtrot Oscar Romeo India Tango !"