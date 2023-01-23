/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function(matrix) {
    let row = matrix.length ;
    for(let i = 0; i < row/2; i++){
        for(let j = i; j < row - i - 1; j++){
            let temp = matrix[i][j];
            matrix[i][j] = matrix[row - 1 - j][i];
            matrix[row - 1 - j][i] = matrix[row - 1 - i][row - 1 - j];
            matrix[row - 1 - i][row - 1 - j] = matrix[j][row - 1 - i];
            matrix[j][row - 1 - i] = temp;
        }
    }
};