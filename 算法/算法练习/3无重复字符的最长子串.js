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

const lengthOfLongestSubstring2 =(s)=>{
    const occ = new Set();
    const n = s.length;
    let rk = -1,ans=0;
    for(let i = 0; i < n; i++) {
        if(i!=0){
            occ.delete(s.charAt(i-1));
        }
        while(rk+1<n && !occ.has(s.charAt(rk+1))){
            occ.add(s.charAt(rk+1))
            rk++
        }
        ans =Math.max(ans,rk-i+1)
    }
    return ans
}
console.log(lengthOfLongestSubstring2(s))