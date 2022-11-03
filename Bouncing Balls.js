function bouncingBall(h, bounce, window) {
    if ((bounce <= 0 || bounce >= 1) || h < window || h <= 0 || h === window) return -1
    let count = 1
    while (h > window) {
        h = h * bounce
        if (h > window) count = count + 2
    }
    return count
}

console.log(bouncingBall(3.0, 0.66, 1.5));//3
console.log(bouncingBall(30.0, 0.66, 1.5));//15
console.log(bouncingBall(3.0, 1.0, 1.5));//-1
console.log(bouncingBall(2, 0.5, 1));//1
console.log(bouncingBall(10, 0.6, 10));//-1