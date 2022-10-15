const solution = (arr) => {
    let res = ''
    let stack = []
    const addRes = () => {
        if (stack.length === 1) res += `${stack[0]},`
        if (stack.length === 2) res += `${stack[0]},${stack[stack.length - 1]},`
        if (stack.length >= 3) res += `${stack[0]}-${stack[stack.length - 1]},`
    }
    arr.forEach((item, ind) => {
        if (stack.length === 0) {
            stack = [...stack, item]
        } else {
            let diff = Math.abs(stack[stack.length - 1] - item);
            if (diff === 1) {
                stack = [...stack, item]
            } else {
                addRes()
                stack.length = 0
                stack = [...stack, item]
            }
        }
    })
    if (stack.length) addRes()
    return res.replace(/\,$/g, '')
}


console.log(solution([-10, -9, -8, -6, -3, -2, -1, 0, 1, 3, 4, 5, 7, 8, 9, 10, 11, 14, 15, 17, 18, 19, 20]));
// returns "-10--8,-6,-3-1,3-5,7-11,14,15,17-20"