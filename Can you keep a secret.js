function createSecretHolder(secret) {
    return {
        getSecret: function () {
            return secret
        },
        setSecret: function (value) {
            secret = value
        }
    }
}

let obj = createSecretHolder(5)
console.log(obj);
console.log(obj.getSecret());
obj.setSecret(2);
console.log(obj.getSecret());