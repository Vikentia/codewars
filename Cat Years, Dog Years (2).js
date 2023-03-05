var ownedCatAndDog = function (catYears, dogYears) {
    let ownedCat = catYears >= 15 ? 1 : 0;
    let ownedDog = dogYears >= 15 ? 1 : 0;
    if (ownedCat) catYears = catYears - 15;
    if (ownedDog) dogYears = dogYears - 15;
    if (ownedCat && catYears >= 9) {
        ownedCat++;
        catYears = catYears - 9;
    }
    if (ownedDog && dogYears >= 9) {
        ownedDog++;
        dogYears = dogYears - 9;
    }
    while (ownedCat >= 2 && catYears >= 4) {
        ownedCat++;
        catYears = catYears - 4;
    }
    while (ownedDog >= 2 && dogYears >= 5) {
        ownedDog++;
        dogYears = dogYears - 5;
    }
    return [ownedCat, ownedDog];
}

console.log(ownedCatAndDog(56, 64));//[10,10]
console.log(ownedCatAndDog(9, 96));//