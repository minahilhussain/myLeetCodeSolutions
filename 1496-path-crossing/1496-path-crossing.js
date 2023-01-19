/**
 * @param {string} path
 * @return {boolean}
 */
var isPathCrossing = function(path) {
    let xNow = 0
    let yNow = 0
    let pointsCovered = ['0+0']

    for(let dir of path){
       switch(dir){
           case "N":
               yNow+=1
               break;
           case "S":
               yNow-=1
               break;
           case "E":
               xNow+=1
               break;
           case "W":
               xNow-=1
               break;
           default:
               break;
       }
        if(pointsCovered.includes(`${xNow}+${yNow}`)){
           return true
       }
       pointsCovered= [...pointsCovered,`${xNow}+${yNow}`]
       
    }
    return false
};