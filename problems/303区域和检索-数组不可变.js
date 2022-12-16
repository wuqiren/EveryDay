/**
 * @param {number[]} nums
 */
var NumArray = function(nums) {
    let newArr = [0];
    for (var i = 1; i < nums.length+1; i++){
        newArr[i]=newArr[i-1]+nums[i-1];
    }
    this.sums=newArr;
};

/** 
 * @param {number} left 
 * @param {number} right
 * @return {number}
 */
NumArray.prototype.sumRange = function(left, right) {
    return this.sums[right+1]-this.sums[left]
};

/**
 * Your NumArray object will be instantiated and called as such:
 * var obj = new NumArray(nums)
 * var param_1 = obj.sumRange(left,right)
 */