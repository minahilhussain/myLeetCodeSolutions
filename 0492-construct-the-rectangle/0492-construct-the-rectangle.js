/**
 * @param {number} area
 * @return {number[]}
 */
var constructRectangle = function(area) {
    let i = Math.floor(area/2);
    let output = [area, 1];
    let diff = area-1;
    while(i>=1) {
        if(area%i === 0 && Math.abs(i - area/i)<diff) {
            diff = Math.abs(i - area/i);  
            output = [i , area/i];          
        }
        i--;
    }
    return output;
};