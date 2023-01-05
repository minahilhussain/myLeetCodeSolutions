/**
 * @param {number[]} startTime
 * @param {number[]} endTime
 * @param {number} queryTime
 * @return {number}
 */
var busyStudent = function(startTime, endTime, queryTime) {
    let count = 0;
    for(let i in startTime)  {
        if(startTime[i] <= queryTime && endTime[i] >= queryTime) count++
    }
    return count;
};