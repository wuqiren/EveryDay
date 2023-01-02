/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
    let res=[] ;
    let track=[];
    const breaktrack = (left,right,track)=>{
        // 若左括号剩下的多，说明不合法 因为先消费的左边的，所以一定是左边的元素比右边的少
       if(right<left) return;
       // 数量小于0 不合法
       if(left<0||right<0) return;
        // 当所有括号都恰好用完时，得到一个合法的括号组合
       if(left==0 && right==0){
           res.push(track.slice().join(''));
           return;
       }
           // 尝试放一个左括号
       track.push('(');
       breaktrack(left-1,right,track);
       track.pop();
           // 尝试放一个右括号
       track.push(')');
       breaktrack(left,right-1,track);
       track.pop();
   }
   breaktrack(n,n,track);
    return res;
};
console.log(generateParenthesis(3))