function evenator(str) {
    return str.replace(/[.,?!_]/g, '').split(' ').map(el => el.length % 2 ? el + el[el.length - 1] : el).join(' ')
}

console.log(evenator("How did we end up here? We go?") === "Howw didd we endd up here We go");
console.log(evenator("How did we end up here? We go?"));