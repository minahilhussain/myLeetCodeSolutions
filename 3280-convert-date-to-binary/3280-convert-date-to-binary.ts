const getBinary = (num: number): string => {
    let binary: string = '', rem: number;
    while(num > 1) {
       rem = num % 2;
       num = Math.floor(num / 2);
       binary = rem.toString() + binary;
    }
    return num + binary;
}

function convertDateToBinary(date: string): string {
   let dateArr: string[] =  date.split('-');
   for (let i = 0; i < dateArr.length; i++) {
       dateArr[i] = getBinary(Number(dateArr[i]));
   }
   const res = dateArr.join('-');
   return res;
};



