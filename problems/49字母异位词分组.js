/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    const map = new Map();
    for (let str of strs) { 
        let key = str.split("").sort().join(""); //sort排序 会使得所有拥有相同字母构成的单词统一变成相同的单词
        if (map.has(key)) {
            map.get(key).push(str);
        } else {
            map.set(key, [str]);
        }
    }
    return [...map.values()];
};

const  strs = ["eat", "tea", "tan", "ate", "nat", "bat"]