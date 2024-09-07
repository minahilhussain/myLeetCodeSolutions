function findTheDifference(strS: string, strT: string): string {
    let mapS: { [key: string]: number } = {};
    let mapT: { [key: string]: number } = {};
    for (let i = 0; i < strS.length; i++) {
       mapS[strS[i]] = mapS[strS[i]] + 1 || 1; 
       mapT[strT[i]] = mapT[strT[i]] + 1 || 1;       
    }
    mapT[strT[strT.length - 1]] = (mapT[strT[strT.length - 1]] || 0) + 1;
    
    const keysS: string[] = Object.keys(mapS);
    const keysT: string[] = Object.keys(mapT);
    for (let key in mapT) {
      if (mapT[key] !== mapS[key]) {
        return key;
      }
    }
    for (let key of keysT) {
      if (!keysS.includes(key)) {
        return key;
      }
    }
};