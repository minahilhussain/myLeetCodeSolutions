/**
 * @param {string[]} queries
 * @param {string} pattern
 * @return {boolean[]}
 */
var camelMatch = function(queries, pattern) {
    let result = [];
    for(query of queries) {
        let pointer = 0;
        let resultVal = true;
        for(let i = 0; i < query.length; i++) {
            if (pointer < pattern.length && query[i] === pattern[pointer]) pointer++;
            else if (query[i] === query[i].toUpperCase()) {
                resultVal = false;
                break;
            }
        }
        if (pointer !== pattern.length) resultVal = false;
        result.push(resultVal)
    }
    return result;
};