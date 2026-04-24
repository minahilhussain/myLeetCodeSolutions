const countOnes = (binaryNum: string): number => {
  let count = 0;
  for (let i = 0; i < binaryNum.length; i++) {
    if (binaryNum[i] === "1") count++;
  }
  return count;
} 

function countBits(n: number): number[] {
    let arr: number[] = [];
    for (let i = 0; i <= n; i++) {
      arr.push(countOnes(i.toString(2)));
    }
    return arr;
};