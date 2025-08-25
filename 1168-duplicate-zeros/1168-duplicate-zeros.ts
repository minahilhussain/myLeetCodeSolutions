/**
 Do not return anything, modify arr in-place instead.
 */
function duplicateZeros(arr: number[]): void {
    let arr2: number[] = [];
    const noOfZeros: number[] = arr.filter(a => a === 0);
    if (noOfZeros.length !== arr.length) {
        for (let i = 0; i < arr.length; i++){
            arr2.push(arr[i]);
            if (arr[i] === 0) arr2.push(0);
        }
        for (let i = 0; i < arr.length; i++){
            arr[i] = arr2[i]; 
        }
    }
};