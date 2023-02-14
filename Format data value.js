function formatDataValue(data) {
    if(!data) return '0MB';
    let mb, gb, tb, arr = [];
    if (data < 1000000000) tb = Math.floor(data / 1000000), gb = Math.floor(data / 1000 % 1000), mb = data % 1000;
    if (data < 1000000) gb = Math.floor(data / 1000), mb = data % 1000;
    if (data < 1000) mb = data;
    if (tb) arr.push(tb + 'TB')
    if (gb) arr.push(gb + 'GB')
    if (mb) arr.push(mb + 'MB')
    return arr.join(' ')
}

console.log(formatDataValue(123452267)); //'123TB 452GB 267MB'
console.log(formatDataValue(900));
console.log(formatDataValue(2));
console.log(formatDataValue(855071)); 