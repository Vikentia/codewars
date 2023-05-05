function ipToInt32(ip) {
    let arr = ip.split('.').map(Number)
    return arr[0] * (256 ** 3) + arr[1] * (256 ** 2) + arr[2] * 256 + arr[3]
}

console.log(ipToInt32("128.32.10.1"));//2149583361