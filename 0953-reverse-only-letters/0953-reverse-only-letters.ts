function isSpecialChar(char) {
  const regex = /[^a-zA-Z]/; 
  return regex.test(char);
};
function reverseOnlyLetters(s: string): string {
    let i: number = 0;
    let j: number = s.length - 1;
    let str: string[] = s.split("");

    while (i < j) {
        if (isSpecialChar(str[i])) {
            i++;
        } else if (isSpecialChar(str[j])) {
            j--;
        } else {
            [str[i], str[j]] = [str[j], str[i]];
            i++;
            j--;
        }
    }
    return str.join("");
};