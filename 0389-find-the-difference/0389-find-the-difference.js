/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
var findTheDifference = function(strS, strT) {
    let mapS = {};
    let mapT = {};
    for (let i = 0; i < strS.length; i++) {
       mapS[strS[i]] = mapS[strS[i]] + 1 || 1; 
       mapT[strT[i]] = mapT[strT[i]] + 1 || 1;       
    }
    mapT[strT[strT.length - 1]] = (mapT[strT[strT.length - 1]] || 0) + 1;
    
    const keysS = Object.keys(mapS);
    const keysT = Object.keys(mapT);
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