function getStrings(city) {
    return [...new Set(city.toLowerCase().split(''))]
        .map((el) => {
            let n = city.toLowerCase().split('').filter(l => l === el).length
            return el && `${el}:${'*'.repeat(n)}`
        })
        .filter(e => !e.includes(' '))
        .join(',')
}

console.log(getStrings("Chicago"));//"c:**,h:*,i:*,a:*,g:*,o:*"
console.log(getStrings("Las Vegas"));//"l:*,a:**,s:**,v:*,e:*,g:*"