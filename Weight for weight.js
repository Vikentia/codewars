// My friend John and I are members of the "Fat to Fit Club (FFC)". John is worried because each month a list with the weights of members is published and each month he is the last on the list which means he is the heaviest.
// I am the one who establishes the list so I told him: "Don't worry any more, I will modify the order of the list". It was decided to attribute a "weight" to numbers. The weight of a number will be from now on the sum of its digits.
// For example 99 will have "weight" 18, 100 will have "weight" 1 so in the list 100 will come before 99.
// Given a string with the weights of FFC members in normal order can you give this string ordered by "weights" of these numbers?


function orderWeight(string) {
    let strNums = string.split(' ');
      let temp =[];
      for(let i=0; i< strNums.length; i++){
        let sum = strNums[i].split('').map(Number).reduce((s,e)=>s+e,0)
        temp.push([sum, strNums[i]]);
      }
      let sorted = temp.sort((a,b)=>{
        if(a[0]===b[0]) {
          return a[1].localeCompare(b[1])
        }
        return a[0]-b[0]})
      let res = sorted.map(arr=>arr[1])
      return res.join(' ')
    }
    
//console.log(orderWeight("103 123 4444 99 2000")); //"2000 103 123 4444 99"
//console.log(orderWeight("2000 10003 1234000 44444444 9999 11 11 22 123")); //"11 11 2000 10003 22 123 1234000 44444444 9999"


// function orderWeight(str) {
//     return str
//         .split(' ')
//         .map(item => {
//             let sum = item.split('').map(Number).reduce((s, d) => s + d, 0)
//             let obj = {}
//             obj.str = item;
//             obj.digit = sum
//             return obj
//         })
//         .sort((a, b) => a.str - b.str)
//         .sort((a, b) => a.digit - b.digit)
//         .map(item => item.str).join(' ')
// }