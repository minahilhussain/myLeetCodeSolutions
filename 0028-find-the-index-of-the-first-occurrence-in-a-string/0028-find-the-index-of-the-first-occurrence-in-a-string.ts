function strStr(haystack: string, needle: string): number {
    if(needle.length > haystack.length) return -1;
    let k: number = 1;
    let count:number = 0;
    for ( let i: number = 0; i < haystack.length; i++) {
        if (haystack[i] === needle[k-1]) {
            for (let j: number = i + 1; j < haystack.length, k < needle.length; j++, k++) {
                if(haystack[j] === needle[k]) {
                  count++;  
                } 
                else break;
            }
            if(count + 1 === needle.length) return i; 
            else {
                k = 1; 
                count = 0
            };
        } else {
            k = 1;
            count = 0;
        }
    }
    return -1;
};