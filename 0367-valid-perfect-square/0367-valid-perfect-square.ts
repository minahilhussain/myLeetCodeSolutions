function isPerfectSquare(num: number): boolean {
    const part: number = Math.floor(Math.sqrt(num));
    return part * part === num;
};