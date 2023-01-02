/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    // 哈希集合，记录每个字符是否出现过
    const occ = new Set();
    const n = s.length;
    // 右指针，初始值为 -1，相当于我们在字符串的左边界的左侧，还没有开始移动
    let rk = -1,
        ans = 0;
    for (let i = 0; i < n; ++i) {
        if (i != 0) {
            // 左指针向右移动一格，移除一个字符
            occ.delete(s.charAt(i - 1));
        }
        while (rk + 1 < n && !occ.has(s.charAt(rk + 1))) {
            // 不断地移动右指针
            occ.add(s.charAt(rk + 1));
            ++rk;
        }
        // 第 i 到 rk 个字符是一个极长的无重复字符子串
        ans = Math.max(ans, rk - i + 1);
    }
    return ans;
};


var lengthOfLongestSubstring = function(s) {
    let n = s.length;
    let ans = 0;
    let map = {};
    let start = 0;
    for (let end = 0; end < n; end++) {
        let item = s[end];
        if (map[item]) {
            start = map[item] > start ? map[item] : start
        }
        ans = ans > (end - start + 1) ? ans : (end - start + 1);
        map[item] = end + 1
    }
    return ans
};
console.log(lengthOfLongestSubstring('dvdf'))

var lengthOfLongestSubstring = function(s) {
    let left =0;right=0;
    let window={};
    let res=0
    while (right < s.length){
        let c =s[right]
        right++
        if(window[c]){
            window[c]++
        }else{
            window[c]=1
        }
        while(window[c]>1){
            let d= s[left]
            left++
            window[d]--
        }
        res = Math.max(res,right-left)
    }
    return res
};


var lengthOfLongestSubstring = function(s) {
    let left =0;right=0;
    let window={};
    let res=0
    while(right<s.length){
        let c=s[right]
        right++
        if(window[c]){
            window[c]++
        }else{
            window[c]=1
        }
        while(window[c]>1){
            let d = s[left]
            left++
            window[d]--
        }
        res = Math.max(res,right-left)
    }
    return res
};