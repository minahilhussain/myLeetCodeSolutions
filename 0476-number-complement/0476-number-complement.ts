function findComplement(num: number): number {
    let mask : number = 2 ** num.toString(2).length - 1;
    return mask ^ num ; 
};