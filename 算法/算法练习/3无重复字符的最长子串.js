var lengthOfLongestSubstring = function(s) {
   let n = s.length;
   let ans = 0;
   let map = {};
   let start= 0;
   let end;
   for (end = 0; end < n; end++) {
    let item = s.charAt(end);
    if(map[item]){
        start=map[item]>start?map[item]:start
    }
    ans=ans>(end-start+1)?ans:(end-start+1);
    map[item] = end+1
   }
   return ans
};
let s = "abcabcbb"

console.log(lengthOfLongestSubstring(s))