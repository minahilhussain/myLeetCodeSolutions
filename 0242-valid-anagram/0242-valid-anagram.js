/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(str1, str2) {
    if(str1.length !== str2.length) return false;
    let map1 = {};
    let map2 = {};
    for (let i = 0; i < str1.length; i++) {
       map1[str1[i]] =  map1[str1[i]] + 1 || 1;
       map2[str2[i]] =  map2[str2[i]] + 1 || 1;
    }
    const keys1 = Object.keys(map1);
    const keys2 = Object.keys(map2);
    if (keys1.length !== keys2.length) return false;
    for (const key of keys1) {
    if (map1[key] !== map2[key]) {
      return false;
    }
  }
    return true;
};