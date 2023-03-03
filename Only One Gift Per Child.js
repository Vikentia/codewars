let names = []
function handOutGift(name) {
    if (names.includes(name)) {
        throw new Error()
    } else {
        names.push(name)
    }
}

console.log(handOutGift("Peter"));
console.log(handOutGift("Alice"));
console.log(handOutGift("Peter"));