function inviteMoreWomen(l) {
    return l.reduce((acc, item) => acc + item) > 0
}

console.log(inviteMoreWomen([-1, -1, -1]));