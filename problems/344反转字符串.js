/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
 var reverseString = function(s) {
    return s.reverse()
};

var reverseString1 = function(s) {
    for (let i=0;i<=Math.floor((s.length-1)/2);i++) {
        let y = s[i]
        s[i]=s[s.length-1-i]
        s[s.length-1-i] = y
    }
    return s
};

let s = ["h","e","l","l","o"]

console.log(reverseString1(s))