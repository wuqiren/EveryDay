/**
 * @param {number[]} nums
 * @return {number[]}
 */
 var sortedSquares = function(nums) {
    let min = 0;
    let max = nums.length-1;
    let newArr =[]
    while (min <= max) {
        let minPow = Math.pow(nums[min], 2);
        let maxPow =Math.pow(nums[max], 2);
        if(minPow<maxPow){
            newArr.unshift(maxPow)
            max = max-1;
        }
        else{
            newArr.unshift(minPow)
            min = min+1;
        }
    }
    return newArr
};

const nums = [-7,-3,2,3,11] 
console.log(sortedSquares(nums))