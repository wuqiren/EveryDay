var lengthOfLongestSubstring = function(s) {
    const newArr = s.split('')
    let map = {}
    let max =0;
    let now = 0;
    for (let i = 0; i < newArr.length;i++){
        let item = newArr[i];
        console.log(item,'item')
        console.log(map,'mapmap')
        if(!map[item]){
            now++;
            map[item] =1;
            max = now
        }else{
            max = now>max?now:max; 
            now=1
        }
    }
    return max
};
let s = "abcabcbb"

console.log(lengthOfLongestSubstring(s))