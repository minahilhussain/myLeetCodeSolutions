/**
 * @param {number[][]} matrix
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function(matrix, k) {
    const arr = [];
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[0].length; j++) {
            console.log(matrix[i][j])
            arr.push(matrix[i][j])
        }
    }
    arr.sort((a,b)=> a - b)
    return arr[k - 1];
};