var findMedianSortedArrays = function (nums1, nums2) {
  const total = nums1.length + nums2.length;
  const oneLength = nums1.length;
  const twoLength = nums2.length;
  let curl = -1;
  let prel = -1;
  let point1 = 0;
  let point2 = 0;
  for (let i = 0; i <= parseInt(total / 2); i++) {
    prel = curl;
    if (
      point1 < oneLength &&
      (point2 >= twoLength || nums1[point1] < nums2[point2])
    ) {
      curl = nums1[point1];
      point1++;
    } else {
      curl = nums2[point2];
      point2++;
    }
  }
  if (total % 2 === 0) {
    return (curl + prel) / 2;
  } else {
    return curl;
  }
};
console.log(findMedianSortedArrays([1, 3], [2]));
