function isValid(s: string): boolean {
    let stack = [];

    for(let i = 0; i < s.length; i++){
        if(s[i] === "(" || s[i] === "{" || s[i] === "[") {
            stack.push(s[i]);
        } else {
            if (stack.length == 0) return false;
            let last = stack.pop();
            if(!(s[i] === ")" && last === "(" || 
                 s[i] === "}" && last === "{" || 
                 s[i] === "]" && last === "["  ))
                 return false;
        }
    }
    return stack.length === 0;
};