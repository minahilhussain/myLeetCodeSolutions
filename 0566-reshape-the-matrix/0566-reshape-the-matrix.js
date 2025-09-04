/**
 * @param {number[][]} mat
 * @param {number} r
 * @param {number} c
 * @return {number[][]}
 */
var matrixReshape = function(mat, r, c) {
    let rows = mat.length;
    let cols = mat[0].length;

    if(rows * cols !== r * c) return mat;

    let result = Array.from({ length: r }, () => Array(c).fill(0));
    let rr = 0; 
    let cc = 0;
     for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            result[rr][cc] = mat[i][j];
            cc++;
            if (cc === c) {
                cc = 0;
                rr++;
            }
        }
    }
    return result;
};