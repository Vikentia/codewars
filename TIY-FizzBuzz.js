function tiyFizzBuzz(sentence) {
    return sentence.split('').map(l => {
        if ('BCDFGHJKLMNPQRSTVXWZ'.includes(l)) {
            return 'Iron'
        } else if ('AEIOU'.includes(l)) {
            return 'Iron Yard'
        } else if ('aeiou'.includes(l)) {
            return 'Yard'
        } else {
            return l
        }
    }
    ).join('')
}

console.log(tiyFizzBuzz("Hello WORLD!"));//"IronYardllYard IronIron YardIronIronIron!"