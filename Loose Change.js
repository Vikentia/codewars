function looseChange(cents) {
    let res = { 'Quarters': 0, 'Dimes': 0, 'Nickels': 0, 'Pennies': 0 };
    if (cents <= 0) return res;
    cents = Math.floor(cents);
    res.Quarters = Math.floor(cents / 25);
    cents = cents % 25;
    res.Dimes = Math.floor(cents / 10);
    cents = cents % 10;
    res.Nickels = Math.floor(cents / 5);
    cents = cents % 5;
    res.Pennies = cents;
    return res;
}

console.log(looseChange(56));//{'Nickels': 1, 'Pennies': 1, 'Dimes': 0, 'Quarters': 2}