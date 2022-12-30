function sumOfABeach(beach) {
    return (beach.match(/sand|water|fish|sun/ig) || []).length
}

console.log(sumOfABeach("weoqipurpoqwuirpousandiupqwoieurioweuwateruierqpoiweurpouifiShqowieuqpwoeuisUn"));