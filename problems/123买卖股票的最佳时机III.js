/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let maxK=2;n=prices.length;
    let dp = Array(n).fill(0).map(item=>{
        return Array(maxK+1).fill(0).map(ele=>{
            return Array(2)
        })
    })
    for(let i=0;i<n;i++){
        for(let k=maxK;k>=1;k--){
            if(i-1===-1){
                dp[i][k][0]=0;
                dp[i][k][1]=-prices[i]
                continue;
            }
            dp[i][k][0]=Math.max(dp[i-1][k][0],dp[i-1][k][1]+prices[i])
            dp[i][k][1]=Math.max(dp[i-1][k][1],dp[i-1][k-1][0]-prices[i])
        }
    }
    return dp[n-1][maxK][0]
};
maxProfit([1,2,3,4])


var maxProfit1 = function(prices) {
    let dp_i10=0,dp_i11=-Infinity;
    let dp_i20=0;dp_i21=-Infinity;
    for(let i=0;i<prices.length;i++){
        dp_i20=Math.max(dp_i20,dp_i21+prices[i])
        dp_i21=Math.max(dp_i21,dp_i10-prices[i])
        dp_i10=Math.max(dp_i10,dp_i11+prices[i])
        dp_i11=Math.max(dp_i11,-prices[i])
    }
    return dp_i20
}