/**
 * @param {number} m
 * @param {number} n
 * @param {number[][]} indices
 * @return {number}
 */
var oddCells = function (m, n, indices) {
    let matrix = Array.from({ length: m }, () => Array(n).fill(0));
    for (let k = 0; k < indices.length; k++) {
        const [ri, ci] = indices[k];
        for (let i = 0; i < n; i++) {
            matrix[ri][i]++;
        }
        for (let j = 0; j < m; j++) {
            matrix[j][ci]++;
        }
    }

    let oddCount = 0;
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (matrix[i][j] % 2 !== 0) {
              oddCount++;
            }
        }
    }

    return oddCount;
};