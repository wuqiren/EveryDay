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
