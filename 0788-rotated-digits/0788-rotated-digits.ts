function rotatedDigits(n: number): number {
    let count: number = 0;
    for (let i = 0; i<= n; i++) {
        if(isGood(i)) count++;
    }
    return count;
};

var isGood = (n: number): boolean => {
        let digits: string[] = n.toString().split('');
        for(let i = 0; i < digits.length; i++) {
            if(digits[i] == '0' || digits[i] == '1' || digits[i] == '8')
                continue;
            if(digits[i] == '6') {
                digits[i] = '9';
            } else if(digits[i] == '9') {
                digits[i] = '6';
            } else if(digits[i] == '2') {
                digits[i] = '5';
            } else if(digits[i] == '5') {
                digits[i] = '2';
            } else {
                return false;
            }
        }
    return parseInt(digits.join('')) != n;
}