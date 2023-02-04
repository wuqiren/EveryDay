/**
 * @param {string} s
 * @return {number}
 */
var minAddToMakeValid = function(s) {
    // res 记录插入次数
    let res=0;
    // need 变量记录右括号的需求量
    let need=0;
    for(let i=0; i<s.length; i++) {
        if(s[i]=='('){
            need++;
        }
        if(s[i]==')'){
            need--;
            if(need==-1){
                res++;
                need = 0;
            }
        }
    }
    return res+need;
};

var minAddToMakeValid1 = function(s) {
    let res= 0;
    let need=0;
    for(let i of s){
        if(i==='('){
            need++;
        }
        if(i===')'){
            need--;
            if(need===-1){
                // 需插入一个左括号
                res++;
                need=0
            }
        }
    }
    // need为需要的右括号
    return res+need
}