/**
 * @param {string[]} words
 * @param {number} k
 * @return {string[]}
 */
var topKFrequent = function(words, k) {
    let map = {};
    for (let word of words) {
        map[word] = (map[word] || 0) + 1;
    }
    const sortedKeys = Object.entries(map)
        .sort((a, b) => {
            if (b[1] === a[1]) {
                return a[0].localeCompare(b[0]);
            }
            return b[1] - a[1];
        })
        .map(([key]) => key);

    return sortedKeys.slice(0, k);
};
