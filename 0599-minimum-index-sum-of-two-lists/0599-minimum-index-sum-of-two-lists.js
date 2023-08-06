/**
 * @param {string[]} list1
 * @param {string[]} list2
 * @return {string[]}
 */
var findRestaurant = function(list1, list2) {
    let minSum = list1.length + list2.length;
    let word = [];
    for(let i = 0; i < list1.length; i++) {
        if(list2.indexOf(list1[i]) !== -1) {
            const j = list2.indexOf(list1[i]);
            if(i+j <= minSum) {
                if(i+j === minSum) word.push(list1[i]);
                else word = [list1[i]];
                console.log("Word", word);
                minSum = i + j;
            }
        }
    }
    return word;
};