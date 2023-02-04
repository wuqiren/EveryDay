/**
 * @param {number} n
 * @return {number}
 */
var fib = function(n) {
    if(n===0 || n===1) return n;
    let memo = new Array(n+1).fill(0)
    return help(memo,n)
};

var help = function(memo,n){
    if(n===0 || n===1) return n;
    if(memo[n]!==0) return memo[n];
    memo[n]=help(memo,n-1)+help(memo,n-2);
    return memo[n]
}
console.log(fib(4))

var fib1 = function(n) {
   if(n===0)return 0;
   const dp=new Array(n+1)
   dp[0]=0;
   dp[1]=1;
   for(let i=2;i<=n;i++){
    dp[i]=dp[i-1]+dp[i-2]
   }
   return dp[n]
};
var fib2 = function(n) {
    if(n===0 ||n===1)return n;
   let prev =0;let next=1;
   for(let i=2;i<=n;i++){
    let sum = prev+next;
    prev=next;
    next=sum;
   }
   return next
 };
 


 function fib(n){
    if(n===0||n===1)return n;
    return fib(n-1)+fib(n-2)
 }
 function fib1(n){
    if(n===0||n===1)return n;
    let prev=0;let next=1;
    for(let i=2;i<=n;i++){
        let sum = prev+next
        prev=next;
        next=sum
    }
    return next
 }
 console.log(fib1(4))