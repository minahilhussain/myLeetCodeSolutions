/**
 * @param {string} address
 * @return {string}
 */
var defangIPaddr = function(address) {
   let res = ''
    for (let i = 0; i < address.length; i++) {
        address[i] === '.' ? res+= '[.]' : res += address[i] 
    }
    return res;
};