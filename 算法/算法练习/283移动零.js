/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    let k = 0;
    let length = nums.length;
    for (let i = 0; i < length; i++){
        if(nums[i]!==0){
            nums[k]= nums[i]
            k++;

        }
    }
    for (let j = k; j < length;j++){
        nums[j]=0
    }
    return nums
};
const nums = [0,1,0,3,12]
console.log(moveZeroes(nums));