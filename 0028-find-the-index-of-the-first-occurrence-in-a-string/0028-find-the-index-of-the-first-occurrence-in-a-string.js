/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
    if(needle.length > haystack.length) return -1;
    let k = 1;
    let count = 0;
    for ( let i = 0; i < haystack.length; i++) {
        // console.log("first", i,k,haystack[i],needle[k-1]);
        if (haystack[i] === needle[k-1]) {
            for (let j = i + 1; j < haystack.length, k < needle.length; j++, k++) {
                if(haystack[j] === needle[k]) {
            console.log("second",j, k,haystack[j] , needle[k]);
                    
                  count++;  
                } 
                else break;
            }
            console.log("count", count);
            if(count + 1 === needle.length) return i; 
            else {k = 1; count = 0};
        } else {
            k = 1;
            count = 0;
        }
    }
    return -1;
};