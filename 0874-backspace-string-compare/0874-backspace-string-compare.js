/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var backspaceCompare = function(s, t) {
    const process = str => {
        const stack = [];
        for (const ch of str) {
            ch === '#' ? stack.pop() : stack.push(ch);
        }
        return stack.join('');
    };

    return process(s) === process(t);
};