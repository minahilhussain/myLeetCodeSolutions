function reverseWords(str: string): string {
    let s: string[] = str.split(' ');
    let arr: string[] = [];
    for(let i = 0; i < s.length; i++) {
        arr.push(s[i].split("").reverse().join(""));
    }
    return arr.join(' ');
};