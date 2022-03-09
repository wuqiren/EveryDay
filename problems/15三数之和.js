var threeSum = function (nums) {
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

const arr = [-1, 0, 1, 2, -1, -4];
console.log(threeSum(arr));
