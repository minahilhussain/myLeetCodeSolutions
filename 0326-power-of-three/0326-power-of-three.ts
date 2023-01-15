function isPowerOfThree(n: number): boolean {
    let power:number = 1;
    while(power <= n) {
    	if(power === n){
        	return true;
            }
        power = power * 3;    
    }
    return false;
};