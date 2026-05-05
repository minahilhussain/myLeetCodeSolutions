/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function (digits) {
  if (!digits.length) return [];

  const mapping = {
    "2": ["a", "b", "c"],
    "3": ["d", "e", "f"],
    "4": ["g", "h", "i"],
    "5": ["j", "k", "l"],
    "6": ["m", "n", "o"],
    "7": ["p", "q", "r", "s"],
    "8": ["t", "u", "v"],
    "9": ["w", "x", "y", "z"]
  };

  let res = [""]; // start with empty combination

  for (let i = 0; i < digits.length; i++) {
    const letters = mapping[digits[i]];
    const temp = [];

    for (let j = 0; j < res.length; j++) {
      for (let k = 0; k < letters.length; k++) {
        temp.push(res[j] + letters[k]);
      }
    }

    res = temp;
  }

  return res;
};