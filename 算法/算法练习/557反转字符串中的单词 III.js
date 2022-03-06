/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    let arr = s.split(" ")
    console.log(arr)
    let newArr = []
    for(let i = 0; i < arr.length; i++) {
        let next = arr[i].split("")
        newArr.push(next.reverse().join(''))
    }
    return newArr.join(" ")
};
let s = "Let's take LeetCode contest"
