/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function(nums) {
    let arr = [];
    nums.forEach((item, index) => {
        arr.push(item + (arr[index - 1] ? arr[index - 1] : 0))
    })
    return arr
};


let nums = [1, 1, 1, 1, 1]

console.log(runningSum(nums))