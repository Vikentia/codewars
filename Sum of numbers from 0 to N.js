var SequenceSum = (function () {
    function SequenceSum() { }

    SequenceSum.showSequence = function (count) {
        if (count < 0) return `${count}<0`
        if (count === 0) return `0=0`
        let res = 0;
        let arr = [];
        for (let i = 0; i <= count; i++) {
            arr.push(i)
            res += i
        }
        return arr.join('+') + ' = ' + res
    };

    return SequenceSum;

})();

console.log(SequenceSum.showSequence(6));
console.log(SequenceSum.showSequence(-6));
console.log(SequenceSum.showSequence(0));