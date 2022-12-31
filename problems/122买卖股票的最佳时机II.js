/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let n = prices.length;
    let dp = Array(n).fill(0).map(item=>{
        return Array(2)
    });
    for(let i = 0; i < n; i++){
        if(i-1===-1){
            dp[i][0] =0;
            dp[i][1] =-prices[i]
            continue;
        }
        dp[i][1]=Math.max(dp[i-1][1],dp[i-1][0]-prices[i])
        dp[i][0]=Math.max(dp[i-1][0],dp[i-1][1]+prices[i])
    }
    return dp[n-1][0]
};

var maxProfit1 = function(prices) {
    let n = prices.length;
    let dp_i_0 =0;
    let dp_i_1 = -Infinity;
    for(let i=0;i<n;i++){
        dp_i_0=Math.max(dp_i_0,dp_i_1+prices[i])
        dp_i_1=Math.max(dp_i_0-prices[i],dp_i_1)
    }
    return dp_i_0;
};