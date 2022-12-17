/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
    let left=0;
    let right=nums.length-1;
    let leftValue=-1;
    let rightValue=-1;
    while (left <= right) {
        let mid =left+Math.floor(right-left);
        if(nums[mid]===target) {
            right = mid-1;
        }else if(nums[mid]>target) {
            right = mid-1
        }else if(nums[mid]<target) {
            left = mid+1;
        }
    }
    leftValue = nums[left]===target ? left :leftValue ;
     left=0;
     right=nums.length-1;
    while (left <= right) {
        let mid =left+Math.floor(right-left);
        if(nums[mid]===target) {
            left = mid+1;
        }else if(nums[mid]>target) {
            right = mid-1
        }else if(nums[mid]<target) {
            left = mid+1;
        }
    }
    rightValue= nums[left - 1] === target ? (left - 1) : -1;
    if (left - 1 < 0) rightValue =-1;
    return [leftValue,rightValue]
};

searchRange([5,7,7,8,8,10],8)