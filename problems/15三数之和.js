var threeSum1 = function (nums) {
  let nus = [];
  if (nums == null || nums.length < 3) return nus;
  nums = nums.sort((a, b) => a - b);
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > 0) break;
    if (nums[i] === nums[i - 1]) continue;
    let L = i + 1;
    let R = nums.length - 1;
    while (L < R) {
      const sum = nums[L] + nums[i] + nums[R];
      if (sum === 0) {
        nus.push([nums[i], nums[L], nums[R]]);
        while (nums[L] === nums[L + 1]) {
          L++;
        }
        while (nums[R] === nums[R - 1]) {
          R--;
        }
        L++;
        R--;
      } else if (sum < 0) {
        L++;
      } else {
        R--;
      }
    }
  }
  return nus;
};
/**
 * @param {number[]} nums
 * @return {number[][]}
 */

var twoSum=function (nums,target,start) {
  let L=start,R=nums.length-1;
  let res=[]
  while(L<R){
    let sum=nums[L]+nums[R];
    let left=nums[L];
    let right=nums[R]
    if(sum>target){
      while(L<R && nums[R]===right){
        R--;
      }
    }
    else if(sum<target){
      while(L<R && nums[L]===left){
        L++
      }
    }else{
      res.push([left,right])
      while(L<R && nums[R]===right){
        R--;
      }
      while(L<R && nums[L]===left){
        L++
      }
    }
  }
  return res
}
var threeSum = function(nums) {
  nums.sort((a,b) =>a-b);
  let res=[];
  for(let i=0;i<nums.length;i++){
    let tuples = twoSum(nums,-nums[i],i+1)
    tuples.forEach(item=>{
      item.push(nums[i])
      res.push(item)
    })
    while(i<nums.length-1 && nums[i]==nums[i+1]){
      i++
    }
  }
  return res
};
const arr = [-1, 0, 1, 2, -1, -4];
console.log(threeSum(arr));
