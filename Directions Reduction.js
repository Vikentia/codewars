function dirReduc(arr) {
    const res = []
    arr.forEach((e) => {
        switch (e) {
            case "NORTH":
                return res[res.length - 1] === "SOUTH" ? res.pop() : res.push("NORTH")
            case "SOUTH":
                return res[res.length - 1] === "NORTH" ? res.pop() : res.push("SOUTH")
            case "EAST":
                return res[res.length - 1] === "WEST" ? res.pop() : res.push("EAST")
            case "WEST":
                return res[res.length - 1] === "EAST" ? res.pop() : res.push("WEST")
        }
    })

    return res
}

console.log(dirReduc(["NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH", "WEST"]));//["WEST"]
console.log(dirReduc(["NORTH", "WEST", "SOUTH", "EAST"]));//