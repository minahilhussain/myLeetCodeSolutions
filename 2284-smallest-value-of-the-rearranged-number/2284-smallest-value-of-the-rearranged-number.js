/**
 * @param {number} num
 * @return {number}
 */
var smallestNumber = function(num) {
    let arr = num.toString().split("");
    if (num < 0) {
        arr.sort((a,b) => b - a);
        return Number(arr.join(''));
    } else {
        arr.sort();
        let zero = 0;
        let res = '';
        for (let i = 0; i < arr.length; i++) {
            if(arr[i] === '0') zero++;
            else {
                if(res === ''){
                    res = arr[i];
                    let num = Array(zero).fill(0).join('');
                    res += num;
                }
                else {
                    res += arr[i];
                }
            }
        }
    return Number(res);
    }
};