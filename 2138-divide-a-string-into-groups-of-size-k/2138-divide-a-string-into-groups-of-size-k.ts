function divideString(str: string, k: number, fill: string): string[] {
     if(str.length % k !== 0) {
        const remainder = str.length % k;
        for(let i = 0; i < k - remainder; i++){
            str+= fill;
        }
    }
    let words: string[] = [];
     for(let i = 0; i < str.length; i += k){
        words.push(str.slice(i,i+k));
    }
    return words;
};