function bitwiseComplement(n: number): number {
    return  parseInt([...n.toString(2)].map(bin => bin == '1'? '0':'1').join(''), 2);
};