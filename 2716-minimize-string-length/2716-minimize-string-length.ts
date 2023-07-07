function minimizedStringLength(s: string): number {
    let map: string[] = [];
    for(let i = 0; i < s.length; i++) {
        if(map.indexOf(s[i]) === -1 ) {
            map.push(s[i])
        }
    }
    return map.length;
};