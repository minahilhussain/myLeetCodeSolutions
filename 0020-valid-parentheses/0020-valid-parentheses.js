/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    let stack = [];
    let open = ['(','{','['];
    let close = [')','}',']'];
    
    for(let i = 0; i < s.length; i++){
        if(open.indexOf(s[i]) !== -1) {
            stack.push(s[i]);
        } else {
            if (stack.length == 0) return false;
            let last = stack.pop();
            if(!checkPair(s[i], last)) return false;
        }
    }
    return stack.length === 0;
};

function checkPair(str1, str2) {
    if(str1 === ")") {
        if(str2 === "(") return true;
    }
    if(str1 === "}") {
        if(str2 === "{") return true;
    }
    if(str1 === "]") {
        if(str2 === "[") return true;
    }
    return false;
}