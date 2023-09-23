var twoSum = function (nums, target) {
  let arr = [];
  nums.some((item, key) => {
    const next = target - item;
    let index = nums.indexOf(next);
    if (index > -1) {
      if (index === key) {
        index = nums.lastIndexOf(next);
      }
      if (index !== key) {
        arr = [key, index];
        return true;
      }
    }
  });
  return arr;
};

var twoSum2 = function (nums, target) {
  let map = {};
  for (let i = 0; i < nums.length; i++) {
    const index = target - nums[i];

    if (map[index] !== undefined) {
      return [i, map[index]];
    }
    map[nums[i]] = i;
  }
};
console.log(twoSum2([2, 7, 11, 15], 9));



/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum5 = function(nums, target) {
    let map =new Map();
  for (let i = 0;i<nums.length;i++){
    const index = target - nums[i];
      if (map.has(index)) {
            return [i,map.get(index)]
        }else{
            map.set(nums[i],i)
        }
    }
};
console.log(twoSum5([2, 7, 11, 15], 9));
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
  nums.sort((a, b) =>a-b)
  let left=0;right=nums.length-1;
  while (left < right) {
    if(nums[left]+nums[right]>target){
      right--
    }
    if(nums[left]+nums[right]===target){
      return [nums[left],nums[right]]
    }
    if(nums[left]+nums[right]<target){
      left++
    }
  }
};