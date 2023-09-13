function fib(n: number): number {
    if(n === 1 || n === 0 ) return n;
    else {
        let n1: number = 1;
        let n0: number = 0;
        let n2: number;
        for (let i = 0; i < n - 1; i++) {
            n2 = n0 + n1;
            n0 = n1;
            n1 = n2;
        }
        return n2;
    }
};