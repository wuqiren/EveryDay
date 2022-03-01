/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */

// 这种会超时
 var rotate = function(nums, k) {
    for(let i=0;i<k;i++){
        nums.unshift(nums.pop(nums.length-1));
    }
    return nums;
};


var rotate1 = function(nums, k) {
    const newArr = []
    for(let i=0;i<k;i++){
        newArr.unshift(nums.pop(nums.length-1));
    }
    console.log(newArr,'newArrnewArr')
    console.log( newArr.concat(nums),' newArr.concat(nums) newArr.concat(nums)')
    return newArr.concat(nums);
};
let nums = [1,2,3,4,5,6,7], k = 3

console.log(rotate1(nums,k))