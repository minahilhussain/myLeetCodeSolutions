/**
 * @param {string} paragraph
 * @param {string[]} banned
 * @return {string}
 */
var mostCommonWord = function (paragraph, banned) {
  let arr = paragraph
    .replace(/[^\w\s]/g, ' ')  // 🔥 important fix
    .toLowerCase()
    .split(/\s+/);

  let obj = {};

  for (let i = 0; i < arr.length; i++) {
    if (!arr[i]) continue;
    obj[arr[i]] = (obj[arr[i]] || 0) + 1;
  }

  let bannedSet = new Set(banned.map(w => w.toLowerCase()));

  let sortedArr = Object.entries(obj)
    .sort((a, b) => b[1] - a[1])
    .map(([key]) => key);

  for (let i = 0; i < sortedArr.length; i++) {
    if (!bannedSet.has(sortedArr[i])) return sortedArr[i];
  }

  return '';
};