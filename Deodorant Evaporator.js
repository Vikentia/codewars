function evaporator(content, evap_per_day, threshold) {
    let days = 0;
    let limit = (threshold / 100) * content;
    while (content > limit) {
        content *= (1 - evap_per_day / 100);
        days++;
    }
    return days;
}

console.log(evaporator(10, 10, 10));//22
console.log(evaporator(10, 10, 5));//29