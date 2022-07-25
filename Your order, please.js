// Your task is to sort a given string.Each word in the string will contain a single number.This number is the position the word should have in the result.

// Note: Numbers can be from 1 to 9. So 1 will be the first word(not 0).

// If the input string is empty, return an empty string.The words in the input String will only contain valid consecutive numbers.

function order(words) {
    let array = words.split(' ');
    let array2 = [];
    for (let i = 1; i < 10; i++) {
        array2.push(array.filter(item => (item.includes(i))));
    }
    return array2.join(" ").trim();
}

console.log(order("is2 Thi1s T4est 3a"));
console.log(order("4of Fo1r pe6ople g3ood th5e the2"));

