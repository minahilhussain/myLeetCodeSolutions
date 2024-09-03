function firstUniqChar(s: string): number {
        let hashMap = {};
    for (let i of s) {
        hashMap[i] = (hashMap[i] || 0) + 1;
    }
    for (let i = 0; i < s.length; i++) {
        if (hashMap[s[i]] === 1) {
            return i;
        }
    }
    return -1;
};