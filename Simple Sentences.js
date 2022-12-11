function makeSentence(parts) {
    return parts
      .filter(item => !/[ .]+/gi.test(item))
      .join(' ')
      .replace(/ ,/g, ',') + '.'
      .replace(/[?.]+/, '.')
}

console.log(makeSentence(['hello', 'world']));
console.log(makeSentence(['hello', ',', 'my', 'dear']));