/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
 var checkInclusion = function(s1, s2) {
    let window={}
    let valid=0,left=0,right=0;
    let need={}

    for(let i of s1){
        if(need[i]){
            need[i]++
        }else{
            need[i]=0
        }
    }
    while(right<s2.length){
        let c = s2[right]
        right++;
        if(need[c]){
            if(window[c]){
                window[c]++
            }else{
                window[c]=1
            }
            if(window[c]===need[c]){
                valid++
            }
        }
        while(right-left>s1.length){
            if(valid===Object.keys(need).length){
                return true
            }
            let d = s2[left]
            left++;
            if(need[d]){
                if(need[d]===window[d]){
                    valid--
                }
                window[d]--
            }
        }
    }
    return false
};



let s1 ='abasdasdad'

for(let i of s1){
    console.log(i)
}
