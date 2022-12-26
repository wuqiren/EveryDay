/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function(s, t) {
    let left=0,right =0;
    let need={};
    let window={};
    let valid=0;
    let res=[]
    for(let i=0; i<t.length; i++) {
        if(need[t[i]]){
            need[t[i]]++
        }else{
            need[t[i]] = 1
        }
    }
    while(right < s.length){
        let c = s[right];
        right++;
        if(need[c]){
            if(window[c]){
                window[c]++
            }else{
                window[c] =1
            }
            if(window[c]==need[c]){
                valid++
            }
        }
        while(right-left >=t.length){
            if(valid===Object.keys(need).length){
                res.push(left)
            }
            let d=s[left]
            left++
            if(need[d]){
                if(window[d]===need[d]){
                    valid--
                }
                window[d]--
            }
        }
    }
    return res
};