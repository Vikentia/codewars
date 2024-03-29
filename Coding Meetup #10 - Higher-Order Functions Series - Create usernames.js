function addUsername(list) {
    return list.map(el => ({
        ...el,
        username: `${el.firstName.toLowerCase()}${el.lastName.toLowerCase()[0]}${new Date().getFullYear() - el.age}`
    })
    )
}

var list1 = [
    { firstName: 'Emily', lastName: 'N.', country: 'Ireland', continent: 'Europe', age: 30, language: 'Ruby' },
    { firstName: 'Nor', lastName: 'E.', country: 'Malaysia', continent: 'Asia', age: 20, language: 'Clojure' }
];
console.log(addUsername(list1));