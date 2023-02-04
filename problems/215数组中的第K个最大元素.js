/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */

const quickSort = (arr, left, right) => {
    let partitionIndex;
    if (left < right) {
        partitionIndex = partition(arr, left, right);
        quickSort(arr, left, partitionIndex - 1);
        quickSort(arr, partitionIndex + 1, right);
    }
    return arr;
}
const partition = (arr, left, right) => {
    let pivot = left;
    let index = pivot + 1;
    for (let i = index; i <= right; i++) {
        if (arr[i] < arr[pivot]) {
            swap(arr, i, index);
            index++
        }
    }
    swap(arr, pivot, index - 1);
    return index - 1
}
const swap = (arr, i, j) => {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp
}

const swap2 = (arr, i, j) => {
    [arr[i], arr[j]] = [arr[j], arr[i]]
}
var findKthLargest = function(nums, k) {
    nums.sort((a, b) => b - a)

    return nums[k - 1]
};
console.log(findKthLargest([3, 2, 1, 5, 6, 4], 2))


var findKthLargest2 = function(nums, k) {
    const newArr = quickSort(nums, 0, nums.length)

    return newArr[newArr.length - k]
};


/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
 var findKthLargest = function(nums, k) {
    
};