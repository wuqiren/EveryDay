/**
 * @param {number} k
 * @param {number[]} prices
 * @return {number}
 */

var maxProfit1 = function(prices) {
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

var maxProfit = function(k, prices) {
    let n = prices.length;
    if(n<=0){
        return 0;
    }
    if(k>n/2){
        return maxProfit1(prices)
    }
    let dp = new Array(n).fill(0).map(item=>{
        return Array(k+1).fill(1).map(item=>{
            return Array(2)
        })
    })
    // k = 0 时的 base case
    for (let i = 0; i < n; i++) {
        dp[i][0][1] = -Infinity;
        dp[i][0][0] = 0;
    }

    for(let i=0; i<dp.length; i++){
        for(let j=k;j>=1;j--){
            if(i-1===-1){
                dp[i][k][0]=0;
                dp[i][k][1]=-prices[i]
                continue;
            }
            console.log(dp)
            console.log(dp[i-1][k][0],'dp[i-1][k][0]')
            console.log(dp[i-1][k][1]+prices[i],'dp[i-1][k][1]+prices[i]')
            dp[i][k][0]=Math.max(dp[i-1][k][0],dp[i-1][k][1]+prices[i])
            dp[i][k][1]=Math.max(dp[i-1][k][1],dp[i-1][k-1][0]-prices[i])
        }
    }
    return dp[n-1][k][0]
};

maxProfit(2,[3,2,6,5,0,3])