var maxArea = function (height) {
  let one = 0;
  let two = height.length - 1;
  let value = 0;
  let min = 0;
  for (let i = 0; i < height.length; i++) {
    let length = two - one;
    if (height[one] < height[two]) {
      min = height[one];
      one++;
    } else {
      min = height[two];
      two--;
    }
    value = min * length > value ? min * length : value;
  }
  return value;
};

let height = [1, 8, 6, 2, 5, 4, 8, 3, 7];
console.log(maxArea(height));
