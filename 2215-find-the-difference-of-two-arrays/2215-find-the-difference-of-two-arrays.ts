function findDifference(nums1: number[], nums2: number[]): number[][] {
    let result: number[][] = [[], []];
	for(let i = 0; i < nums1.length; i++) {
  	    if(nums2.indexOf(nums1[i]) === -1 && result[0].indexOf(nums1[i]) === -1) 
		    result[0].push(nums1[i]);
    }
    
    for(let i = 0; i < nums2.length; i++) {
  	    if(nums1.indexOf(nums2[i]) === -1 && result[1].indexOf(nums2[i]) === -1)
		    result[1].push(nums2[i]);
    }
    return result;
};