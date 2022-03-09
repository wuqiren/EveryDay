/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
 var twoSum = function(numbers, target) {
    let map ={}
    for (let i = 0; i < numbers.length; i++){
        let a = target-numbers[i]
        if(map[a]!==undefined){
            console.log(map[a],'map[a]map[a]')
            return [map[a]+1,i]
        }
        map[numbers[i]] = i
    }
};
var twoSum2 = function(numbers, target) {
    let left = 0;
    let right = numbers.length-1
    while (left <= right){
        if(numbers[left]+numbers[right]===target){
            return [left+1,right+1]
        }
        if(numbers[left]+numbers[right]>target){
            right = right-1
        }
        if(numbers[left]+numbers[right]<target){
            left = left+1
        }
    }
};
const numbers = [2,7,11,15]


console.log(twoSum2(numbers,9))