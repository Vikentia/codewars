// The following code is not giving the expected results.Can you debug what the issue is ?
// The following is an example of data that would be passed in to the function.



const getNames = (data) => data.map(item => item.name);

var data = [
    { name: 'Joe', age: 20 },
    { name: 'Bill', age: 30 },
    { name: 'Kate', age: 23 }
]

console.log(getNames(data));  // should return ['Joe', 'Bill', 'Kate']