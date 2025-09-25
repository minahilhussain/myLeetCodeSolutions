/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    const isAnagram = (str1, str2)=> {
        if(str1.length !== str2.length) return false;
        str1 = str1.split('').sort().join('');
        str2 = str2.split('').sort().join('');
        for(let i = 0; i< str1.length; i++) {
            if(str1[i] !== str2[i]) return false;
        }
        return true;
    }

    let res = [];
    let used = new Array(strs.length).fill(false);
    for (let i = 0; i < strs.length; i++) {
        if (used[i]) continue;
        let group = [strs[i]];
        used[i] = true;
        for (let j = i + 1; j < strs.length; j++) {
            if (!used[j] && isAnagram(strs[i], strs[j])) {
                group.push(strs[j]);
                used[j] = true;
            }
        }
        res.push(group);
    }

    return res;

};