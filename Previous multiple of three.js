const prevMultOfThree = n => {
    for (let i = n.toString().length; i > 0; i--) {
        if (+(n.toString().slice(0, i)) % 3) {
            continue;
        } else {
            return +n.toString().slice(0, i)
        }
    }
    return null
}


console.log(prevMultOfThree(952406));//9