function smallestNumber(num: number): number {
    let arr: string[] = num.toString().split("");
    if (num < 0) {
        arr.sort((a, b) => Number(b) - Number(a));
        return Number(arr.join(''));
    } else {
        arr.sort();
        let zero: number = 0;
        let res: string = '';
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] === '0') zero++;
            else {
                if (res === ''){
                    res = arr[i];
                    let num = Array(zero).fill(0).join('');
                    res += num;
                }
                else {
                    res += arr[i];
                }
            }
        }
    return Number(res);
    }
};