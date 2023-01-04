function countDigits(num: number): number {
    let res:number = 0;
    let numsArray: string[] = num.toString().split('');
    for(let i=0; i< numsArray.length; i++) {
        if(num % parseInt(numsArray[i]) == 0) res++;
    }
    return res;
};