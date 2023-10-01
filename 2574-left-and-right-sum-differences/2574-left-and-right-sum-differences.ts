function leftRightDifference(nums: number[]): number[] {
    let answer: number[] = [];
    let leftSum: number = 0;
    let rightSum: number = 0;
    
    for(let i = 0; i < nums.length; i++) {
        if(i === 0) {
            leftSum = 0;
            for(let m = 1; m < nums.length; m++) rightSum += nums[m];  
        } else {
            leftSum += nums[i-1];
            rightSum -= nums[i];       
        }
        answer.push(Math.abs(leftSum - rightSum));
    }
    return answer;
};