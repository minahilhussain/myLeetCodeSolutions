function matrixReshape(mat: number[][], r: number, c: number): number[][] {
    let rows: number = mat.length;
    let cols: number = mat[0].length;

    if(rows * cols !== r * c) return mat;

    let result: number[][] = Array.from({ length: r }, () => Array(c).fill(0));
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