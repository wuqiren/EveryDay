/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
// 备忘录
var memo=[]
var coinChange = function(coins, amount) {
    memo = Array(amount+1).fill(-100);
    return dp(coins,amount)

};

function dp(coins, amount) {
    if(amount===0) return 0;
    if(amount<0)return -1;
    if(memo[amount]!==-100)return memo[amount]
    let res= Infinity;
    for(let i=0; i<coins.length; i++){
        let maxsum=dp(coins,amount-coins[i]);
        if(maxsum===-1) continue;
        res=Math.min(res,maxsum+1);
    }
    memo[amount] = res===Infinity?-1:res
    return  memo[amount] 
}
console.log(coinChange([1,2,5],11))