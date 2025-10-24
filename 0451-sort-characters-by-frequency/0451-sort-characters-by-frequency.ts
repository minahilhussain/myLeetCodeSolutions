function frequencySort(s: string): string {
    const obj: Record<string, number> = {}; 

    for (let i = 0; i < s.length; i++) {
        obj[s[i]] = (obj[s[i]] || 0) + 1;
    }

    return Object.entries(obj)
        .sort((a, b) => b[1] - a[1])
        .flatMap(([key, value]) => Array(value).fill(key)) 
        .join(""); 
}
