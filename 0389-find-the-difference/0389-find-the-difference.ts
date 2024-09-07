function findTheDifference(strS: string, strT: string): string {
    let sumS = 0, sumT = 0;

    for (let i = 0; i < strS.length; i++){
        sumS += strS[i].charCodeAt(0);
        sumT += strT[i].charCodeAt(0);
    }
    sumT += strT.charCodeAt(strT.length - 1);

    return String.fromCharCode(sumT - sumS);
};