function bingo(ticket, win) {
    let count = 0;
    ticket.forEach(item => {
        let letters = item[0].split('')
        for (let i = 0; i < letters.length; i++) {
            if (letters[i].charCodeAt(0) === item[1]) {
                count++;
                break;
            }
        }
    })
    return count >= win ? 'Winner!' : 'Loser!'
}

console.log(bingo([['ABC', 65], ['HGR', 74], ['BYHT', 74]], 2));
console.log(bingo([['ABC', 65], ['HGR', 74], ['BYHT', 74]], 1));