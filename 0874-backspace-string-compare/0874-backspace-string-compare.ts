function backspaceCompare(s: string, t: string): boolean {
    const process = (str: string) => {
        const stack = [];
        for (const ch of str) {
            ch === '#' ? stack.pop() : stack.push(ch);
        }
        return stack.join('');
    };
    return process(s) === process(t);
};