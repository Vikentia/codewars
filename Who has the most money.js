function mostMoney(students) {
    let arr = students.map(obj => {
        return [obj.name, obj.fives * 5 + obj.tens * 10 + obj.twenties * 20]
    })
    let max = 0;
    arr.forEach(e => max = max > e[1] ? max : e[1])
    let res = arr.filter(e => e[1] === max)
    if (res.length === students.length && students.length > 1) return 'all'
    return res[0][0]
}
class Student {
    constructor(name, fives, tens, twenties) {
        this.name = name;
        this.fives = fives;
        this.tens = tens;
        this.twenties = twenties;
    }
}
const andy = new Student("Andy", 0, 0, 2);
const stephen = new Student("Stephen", 0, 4, 0);
const eric = new Student("Eric", 8, 1, 0);
const david = new Student("David", 2, 0, 1);
const phil = new Student("Phil", 0, 2, 1);
const cam = new Student("Cameron", 2, 2, 0);
const geoff = new Student("Geoff", 0, 3, 0);
console.log(mostMoney([andy, stephen, eric, david, phil]));