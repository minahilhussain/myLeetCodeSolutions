function reverseDegree(s: string): number {
    let output: number = 0;
    for (let i = 0; i < s.length; i++) {
        let code = s.charCodeAt(i) - 96;        
        let reverseCode = 27 - code;     
        output += (i + 1) * reverseCode; 
    }
    return output;
};