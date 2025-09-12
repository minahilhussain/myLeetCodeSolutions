function isPalindrome(x: number): boolean {
    const y: string = x.toString();
    return y.split("").reverse().join("") === y;   
};
