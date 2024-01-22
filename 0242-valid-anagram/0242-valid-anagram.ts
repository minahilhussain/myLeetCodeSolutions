function isAnagram(str1: string, str2: string): boolean {
    let arr1: number[] = [], arr2: number[] = [];
    for (let i: number = 0; i < 26; i++) {
        arr1[i] = 0;
        arr2[i] = 0;
    }
    if (str1.length !== str2.length) return false;
    for (let i = 0; i < str1.length; i++) {
        arr1[str1[i].charCodeAt(0) - 97]++;
        arr2[str2[i].charCodeAt(0) - 97]++;
    }
    for (let i: number = 0; i < 26; i++) {
        if (arr1[i] !== arr2[i]) {
            return false;
        }
    }
    return true
};

