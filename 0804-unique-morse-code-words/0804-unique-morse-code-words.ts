function uniqueMorseRepresentations(words: string[]): number {
    let morseCode = new Set();
    for(let i = 0; i < words.length; i++) {
         morseCode.add(generateMoreCode(words[i]));
    }
    return morseCode.size;
};

var generateMoreCode = (str) => {
   const dict = [".-","-...","-.-.","-..",".","..-.","--.","....","..",".---","-.-",".-..","--","-.","---",".--.","--.-",".-.","...","-","..-","...-",".--","-..-","-.--","--.."];
    
    let encoded = "";
    for(let i = 0; i < str.length; i++) {
        encoded += dict[str.charCodeAt(i) - 97];
    }
    return encoded;
};