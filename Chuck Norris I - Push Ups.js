const chuckPushUps = (str) => {
    if (typeof str !== 'string' || str === '') return 'FAIL!!'
    str = str.split(' ').map(item => {
        let a = item.match(/[01]/g)
        if (Array.isArray(a)) return a.join('')
    }).filter(i=>typeof i === 'string').map(str=>parseInt(str,2)).sort((a,b)=>b-a)[0]
    if (isNaN(str)) return "CHUCK SMASH!!"
    return str
}

console.log(chuckPushUps('1 "Chuck" 10 "Stop that!" 11 "Your vest looks stupid" 100 101 110')); //6
console.log(chuckPushUps('10000 "Nice Beard" 1111 "Are you wearing denim shorts?" 1110 1101')); //16
console.log(chuckPushUps('1000 "Did you kick someone in the face today?" 1001 1010 "Will I be making dinner then?!" 1011 110'));//11
console.log(chuckPushUps([])); // 'FAIL!!'
console.log(chuckPushUps('1000010010110DTQbuwkBxoAzPT0mBs1001010RtB7SQGthSnadeQIXDeiaTdye4aMPFfBVDy2PYkSEbhf')); //1087050
console.log(chuckPushUps('CHUCK SMASH!!'));
console.log(chuckPushUps('hZya75WobKWCFUARK920QtmN0LMgzu8hFk10ZY4aShaKEOV18IDPe18yySGpjwKdAnr03VMWmLyrc8VScDeqtSayMeasV8por3Y101Drf1wjxpCIxv0LYMtf1MUj2bgJP115mKfah8R1OCyWf3YRMzKmw2r54mtGWYfzur1KgoFu4zfc2yVnv5E8X301DLcjIT3M7'));  //93053

