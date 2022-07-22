/**
 * @param {number[]} nums
 * @return {number}
 */


var pivotIndex = function(nums) {
    const total = nums.reduce((a, b) => a + b, 0);
    let sum = 0;

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] + 2 * sum === total) {
            return i
        }
        sum = sum + nums[i]
    }
    return -1
};
console.log(pivotIndex([2, 1, -1]))