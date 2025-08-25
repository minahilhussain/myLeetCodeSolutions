function camelMatch(queries: string[], pattern: string): boolean[] {
    let result: boolean[] = [];
    for(let query of queries) {
        let pointer: number = 0;
        let resultVal: boolean = true;
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