/**
 * @param {string} date
 * @return {string}
 */
var getBinary = (num) => {
    let binary = '', rem;
    while(num > 1) {
       rem = num % 2;
       num = Math.floor(num / 2);
       binary = rem + binary;
    }
    return num + binary;
}

var convertDateToBinary = function(date) {
   let dateArr =  date.split('-');
   for (let i = 0; i < dateArr.length; i++) {
       dateArr[i] = getBinary(Number(dateArr[i]));
   }
   const res = dateArr.join('-');
   return res;
 
};

