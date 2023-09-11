function addToArrayForm(num: number[], d: number): number[] {
    let k = d.toString().split('');
    let size1 = num.length;
    let size2 = k.length;
    if (size1 > size2) {
        let dif = size1 - size2;
        for(let i = 0; i < dif; i++) {
            k.unshift("0");
        }
    } 
    if (size1 < size2) {
        console.log(size1, size2);
        let dif = size2 - size1;
        for(let i = 0; i < dif; i++) {
            num.unshift(0);
        }
    } 
    let carry = 0;
    for(let i = num.length - 1; i >= 0; i--) {
        let sum = num[i] + Number(k[i]);
        if(sum > 9) {
            sum = sum % 10;
            num[i] = sum + carry;
            if(num[i] === 10) {
                num[i] = 0;
            }   
            carry = 1;
            
        } else {
            num[i] = sum + carry;
             if(num[i] === 10) {
                num[i] = 0;
                carry = 1;
            } else { 
                carry = 0;
            }
        }
    }
    if(carry === 1) {
        num.unshift(1);
    }
    return num;
};