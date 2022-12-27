/**
 * @param {string} s
 * @return {string[]}
 */
var findRepeatedDnaSequences = function(s) {
    let left =0,right =0;
    let window = []
    let seen = {};
    let seen1={}
    while (right < s.length) {
        window.push(s[right]);
        right++;
        if(right-left===10){
            let str = window.join('');
            if(seen[str]){
                seen1[str]=1
            }else{
                seen[str]=1;
            }
            window.shift();
            left++
        }
    }
   return Object.keys(seen1)
};

findRepeatedDnaSequences('AAAAACCCCCAAAAACCCCCCAAAAAGGGTTT')