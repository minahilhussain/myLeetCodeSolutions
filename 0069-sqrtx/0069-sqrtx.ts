function mySqrt(x: number): number {
    let l: number = 0;
    let r: number = x;
        
    while (l < r) {
        let m: number = Math.floor(l + (r-l)/2 + 1);
		if(m > x / m){
            r = m - 1;
        } else {
            l = m;
        }
    }
    
    return l;
};