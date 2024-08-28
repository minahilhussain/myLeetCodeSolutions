function scoreOfString(s: string): number {
  let score: number = 0;
  for (let i: number = 0; i < s.length - 1; i++) {
    score += Math.abs(s.charCodeAt(i) - s.charCodeAt(i + 1));
  }
  return score;
};