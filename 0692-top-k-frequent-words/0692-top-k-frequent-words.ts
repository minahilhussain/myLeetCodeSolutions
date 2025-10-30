function topKFrequent(words: string[], k: number): string[] {
    const map: Record<string, number> = {}; 
    for (const word of words) {
        map[word] = (map[word] || 0) + 1;
    }

    const sortedKeys = Object.entries(map)
        .sort(([wordA, freqA], [wordB, freqB]) => {
            if (freqA === freqB) {
                return wordA.localeCompare(wordB); 
            }
            return freqB - freqA;
        })
        .map(([word]) => word);
    return sortedKeys.slice(0, k);
}
