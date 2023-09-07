function save(sizes, hd) {
    for (let i = 0; i < sizes.length; i++) {
        if (hd >= sizes[i]) {
            hd -= sizes[i]
        } else {
            return i
        }
    }
    return sizes.length
}


console.log(save([4, 4, 4, 3, 3], 12));//3