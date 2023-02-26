function getVillainName(birthday) {
    const m = ["The Evil", "The Vile", "The Cruel", "The Trashy", "The Despicable", "The Embarrassing", "The Disreputable", "The Atrocious", "The Twirling", "The Orange", "The Terrifying", "The Awkward"];
    const d = ["Mustache", "Pickle", "Hood Ornament", "Raisin", "Recycling Bin", "Potato", "Tomato", "House Cat", "Teaspoon", "Laundry Basket"];
    return m[birthday.getMonth()] + ' ' + d[birthday.getDate() % 10]
}

console.log(getVillainName(new Date("May 3")));//"The Despicable Raisin"