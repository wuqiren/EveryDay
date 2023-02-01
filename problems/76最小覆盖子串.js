/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function(s, t) {
    let left=0,right =0;
    let len=Infinity;
    let need={};
    let window={};
    let valid=0,start=0
    for(let i=0; i<t.length; i++) {
        if(need[t[i]]){
            need[t[i]]++
        }else{
            need[t[i]] = 1
        }
    }
    while(right<s.length){
        let c=s[right];
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
        while(valid===Object.keys(need).length){
            if(right-left<len){
                start=left
                len=right-left;
            }
            let d=s[left]
            left++
            if(need[d]){
                if(window[d]==need[d]){
                    valid--
                }
                window[d]--
            }
        }
    }
    console.log(len,'lenlen')
    return len===Infinity?'':s.substring(start,start+len)
};
console.log(minWindow('aa','aa'))



let add =function(s,t){
    let window={};
    let need={};
    let left=0,right=0,valid=0,start=0
    let len= Infinity;
    for(let i=0; i<t.length; i++) {
        if(need[t[i]]){
            need[t[i]]++
        }else{
            need[t[i]] = 1
        }
    }
    console.log(need)
    while(right<s.length){
        let c= s[right]
        right++
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
        while(valid===Object.keys(need).length){
            if(right-left<len){
                start=left
                len=right-left;
            }
            let d = s[left]
            left++
            if(need[d]){
                if(window[d]==need[d]){
                    valid--
                }
                window[d]--
            }
        }
    }
    return len===Infinity?'':s.substring(start,start+len)
    
}

