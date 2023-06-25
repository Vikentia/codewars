function sumOfIntegersInString(s) {
    return s.split(/[^0-9]/gi).filter(e => e).reduce((acc, item) => acc + +item, 0)
}

console.log(sumOfIntegersInString("The30quick20brown10f0x1203jumps914ov3r1349the102l4zy dog"));//3635