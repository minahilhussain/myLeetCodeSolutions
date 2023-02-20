/**
 * @param {string} s
 * @param {string} goal
 * @return {boolean}
 */
var rotateString = function(raw, goal) {
    let oldStr = raw;
    while(raw !== goal) {
        raw = `${raw.slice(1)}${raw.slice(0,1)}`;
        if(raw === oldStr) return false;
    }
    return true;
};