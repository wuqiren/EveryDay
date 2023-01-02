/**
 * @param {string} s
 * @return {number}
 */
var minInsertions = function(s) {
    let need=0;
    let res=0;
    for (let i=0; i<s.length; i++) {
        if(s[i]==='('){
            need+=2
            // 另外，当遇到左括号时，若对右括号的需求量为奇数，
            //需要插入 1 个右括号。因为一个左括号需要两个右括号嘛，右括号的需求必须是偶数
            if (need % 2 == 1) {
                // 插入一个右括号
                res++;
                // 对右括号的需求减一
                need--;
            }
        }
        if(s[i]==')'){
            need--
            if(need==-1){
                need=1;
                res++;
            }
           
        }
    }
    return need+res;
};