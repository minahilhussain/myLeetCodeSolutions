/**
 * @param {number} n
 * @return {number[]}
 */

var countOnes = function(binaryNum) {
  let count = 0;
  for (let i = 0; i < binaryNum.length; i++) {
    if (binaryNum[i] === "1") count++;
  }
  return count;
} 
var countBits = function(n) {
    let arr = [];
    for (let i = 0; i <= n; i++) {
      arr.push(countOnes(i.toString(2)));
    }
    return arr;
};