/**
 Do not return anything, modify s in-place instead.
 */
function reverseString(s: string[]): void {
    let last:number = s.length-1;
    for(let i = 0; i < Math.floor(s.length/2); i++) {
	    let temp = s[i];
	    s[i] = s[last];
	    s[last] = temp;
	    last--;
    }
};