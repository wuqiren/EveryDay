/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
 var searchInsert = function(nums, target) {
    let min =0;
    let max =nums.length-1;
    let index;
    while (min<=max){
        let mid= parseInt((max+min)/2);
        if (nums[mid]===target){
            return mid;
        }
        if(nums[mid]>target){
            max = mid-1;
            index = max
        }
        if(nums[mid]<target){
            min=mid+1;
            index=min;
        }
        
    }
    return min;
};

let arr = [1,3]
let target = 2
console.log(searchInsert(arr, target))
