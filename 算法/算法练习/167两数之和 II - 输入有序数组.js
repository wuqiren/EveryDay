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

const numbers = [2,7,11,15]

console.log(twoSum(numbers,9))