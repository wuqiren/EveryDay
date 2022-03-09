var threeSumClosest = function (nums, target) {
  nums = nums.sort((a, b) => a - b);
  let len = nums.length;
  let closeNum = nums[0] + nums[1] + nums[2];
  for (let i = 0; i < len - 2; i++) {
    let L = i + 1;
    let R = len - 1;
    while (L < R) {
      const sum = nums[i] + nums[L] + nums[R];
      if (Math.abs(sum - target) < Math.abs(closeNum - target)) {
        closeNum = sum;
      }
      if (sum > target) {
        R--;
      } else if (sum < target) {
        L++;
      } else {
        return target;
      }
    }
  }
  return closeNum;
};
let arr = [-1, 2, 1, -4];
console.log(threeSumClosest(arr, 1));
