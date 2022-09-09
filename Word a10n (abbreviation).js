function abbreviate(string) {
    return string.replace(/\w{4,}/g, function(w) { return w[0] + (w.length - 2) + w[w.length - 1] });
  }

console.log(abbreviate("elephant-ride"));
console.log(abbreviate("elephant-rides are really fun!"));