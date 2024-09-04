function countConsistentStrings(allowed: string, words: string[]): number {
    let count: number = 0;
    for(let word of words) {
      let flag: number = 0;
      for(let char of word) {
          if (!allowed.includes(char)) flag = 1;
      }
      if (flag !== 1) count++;
    }
    return count;
};