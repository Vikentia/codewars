var whatTimeIsIt = function (angle) {
    let hours = Math.floor(angle / 30)
    let minutes = Math.floor(angle % 30 * 2)
    if (!hours) hours = 12
    hours < 10 ? hours = '0' + hours : hours.toString()
    minutes < 10 ? minutes = '0' + minutes : minutes.toString()
    return hours + ':' + minutes
}


console.log(whatTimeIsIt(0)); //"12:00";
console.log(whatTimeIsIt(360)); //"12:00";
console.log(whatTimeIsIt(347));
console.log(whatTimeIsIt(50)); 