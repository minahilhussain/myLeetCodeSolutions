function countDigits(num: number): number {
    let res:number = 0;
    let str: string= num.toString();
    for(let i=0; i< str.length; i++) {
        if(num % Number(str[i]) == 0) res++;
    }
    return res;
};