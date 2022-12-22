function constructRectangle(area: number): number[] {
    let i: number = Math.floor( area/2 );
    let output: number[] = [area, 1];
    let diff: number = area-1;
    while(i >= 1) {
        if(area % i === 0 && Math.abs(i - area/i ) < diff) {
            diff = Math.abs(i - area/i);  
            output = [i , area/i];          
        }
        i--;
    }
    return output;
};