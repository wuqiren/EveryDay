/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
 var removeElement = function(nums, val) {
    if(nums.length===0){
        return 0;
    }
    let fast = slow = 0;
    while(fast<nums.length) {
        if(nums[fast]!==val){
            nums[slow]=nums[fast];
            slow++;
        }
        fast++;
    }
    return slow;
};
removeElement([3,2,2,3],3)


var removeElement2 = function(nums, val) {
    let k = 0;
    let length = nums.length;
    for (let i = 0; i < length; i++){
        if(nums[i]!==val){
            nums[k]= nums[i]
            k++;
        }
    }
    return k
}
