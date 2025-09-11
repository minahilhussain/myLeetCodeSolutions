/**
 * @param {string} text
 * @return {string}
 */
var arrangeWords = function(text) {
    const arr = text.split(' ');
    for(let i = 0; i < arr.length - 1; i++) {
        for(let j = 0; j < arr.length - i -1; j++) {
            if(arr[j].length > arr[j + 1].length) {
                const temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp; 
            }
        }
    }
    let str =  arr.join(' ');
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase()
};