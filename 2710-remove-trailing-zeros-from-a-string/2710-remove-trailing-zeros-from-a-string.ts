function removeTrailingZeros(num: string): string {
    if(num[ num.length-1 ] !== '0')  return num;
    else {
        let flag: number = 0;
        for(let i = num.length - 1; i >= 0; i--) {
            if (num[i] === '0') flag++;
            else break;
        }
        return num.substr(0, num.length - flag);
    }
};