/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
 var search = function(nums, target) {
    let min = 0;
    let max = nums.length-1;
    while(min<=max){
        let mid = parseInt((min+max)/2);
        if(nums[mid]==target){
            return mid
        }
        if(nums[mid]<target){
            min=mid+1;
        }else if(nums[mid]>target){
            max=mid-1
        }else{
            return -1
        }
    }
    return -1
    
};


let arr = [-1,0,3,5,9,12]
console.log(search(arr,2))