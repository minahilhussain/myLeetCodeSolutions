/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
    let l = 0;
    let r = x;
        
    while (l < r) {
            
        let m = Math.floor(l + (r-l)/2 + 1);
            
		if(m > x / m){
            r = m - 1;
        } else {
            l = m;
        }
    }
        
    return l;
};
