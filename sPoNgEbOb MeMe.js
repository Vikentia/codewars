function spongeMeme(sentence) {
    return sentence.split('').map((el, i) => i % 2 ? el.toLowerCase() : el.toUpperCase()).join('')
}

console.log(spongeMeme("stop Making spongebob Memes!"));//'StOp mAkInG SpOnGeBoB MeMeS!'