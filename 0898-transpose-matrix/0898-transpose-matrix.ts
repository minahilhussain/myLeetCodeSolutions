function transpose(matrix: number[][]): number[][] {
    let rows: number = matrix.length;
    let cols: number = matrix[0].length;
    let result: number[][] = Array.from({ length: cols }, () => Array(rows).fill(0));
    
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            result[j][i] = matrix[i][j];
        }
    }
    return result;
};