var splitInParts = function (s, partLength) {
    let arr = [];
    let str = ''
    for (let i = 0; i < s.length; i++) {
        if (str.length === partLength) {
            arr.push(str)
            str = s[i]
        } else {
            str += s[i]
        }
    }
    str.length && arr.push(str)
    return arr.join(' ')
}

console.log(splitInParts("supercalifragilisticexpialidocious", 3));//"sup erc ali fra gil ist ice xpi ali doc iou s"