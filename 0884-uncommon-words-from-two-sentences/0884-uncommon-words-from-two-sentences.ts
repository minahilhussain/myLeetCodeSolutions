function uncommonFromSentences(s1: string, s2: string): string[] {
  const freq = {};
  const words = (s1 + " " + s2).split(" ");
  for (let word of words) {
    freq[word] = (freq[word] || 0) + 1;
  }
  const res: string[] = [];
  for (let word in freq) {
    if (freq[word] === 1) {
      res.push(word);
    }
  }
  return res;
};