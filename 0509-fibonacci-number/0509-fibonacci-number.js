/**
 * @param {number} n
 * @return {number}
 */
var fib = function(n) {
    if(n === 1 || n === 0 ) return n;
    else {
        let n1 = 1;
        let n0 = 0;
        let n2;
        for (let i = 0; i < n - 1; i++) {
            n2 = n0 + n1;
            n0 = n1;
            n1 = n2;
        }
        return n2;
    }
};