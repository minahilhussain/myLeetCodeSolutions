function secondHighest(s: string): number {
    let max: number = -1;
    let secMax: number = -1

    for (let i = 0; i < s.length; i++) {
        let num = Number(s[i]);
        if (!isNaN(num)) {
            if (num > max) {
                secMax = max;
                max = num;
            } else if (num < max && num > secMax) {
                secMax = num;
            }
        }
    }
    return secMax;
};