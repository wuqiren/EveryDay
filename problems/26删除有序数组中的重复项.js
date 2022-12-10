/**
 * @param {number[]} nums
 * @return {number}
 */
 var removeDuplicates = function(nums) {
    if(nums.length===0){
        return 0;
    }
    let fast = slow = 0
    while(fast<nums.length){
        if(nums[fast]!==nums[slow]){
            slow++
            nums[slow]=nums[fast]
        }
        fast++;
    }
    return slow+1
};

removeDuplicates([0,0,1,1,1,2,2,3,3,4])