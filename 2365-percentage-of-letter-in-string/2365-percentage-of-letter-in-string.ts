function percentageLetter(str: string, letter: string): number {
    let count: number = 0;
    for (let s of str) {
        if (s === letter) count++;
    }
    return count === 0 ? 0 : Math.floor((count * 100) / str.length);
};