function gordon(a) {
    return a.replace(/a/gi, '@').replace(/[eiou]/gi, '*').toUpperCase().split(' ').map(el => el + '!!!!').join(' ')
}

console.log(gordon('are you stu pid'));//'@R*!!!! Y**!!!! ST*!!!! P*D!!!!'