/**
 * @param {string} date
 * @return {string}
 */
var getBinary = (num) => {
    let binary = '', rem;
    while(num > 1) {
       rem = num % 2;
       num = Math.floor(num / 2);
       binary = rem.toString() + binary;
    }
    return num + binary;
}

var convertDateToBinary = function(date) {
   let dateArr =  date.split('-');
   let res = ''; 
   for (let i = 0; i < dateArr.length; i++) {
       res += getBinary(Number(dateArr[i]));
       if(i !== dateArr.length -1) res += '-'
       
   }
   return res;
 
};

