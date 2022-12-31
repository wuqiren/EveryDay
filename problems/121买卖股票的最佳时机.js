var maxProfit1 = function(prices) {
    if(prices.length<=1){
        return 0;
    }
    let minPrice=prices[0];
    let maxProfit = 0;
    for(let i =0;i<prices.length;i++){
        if(prices[i]<minPrice){
            minPrice = prices[i];
        }else if(prices[i]-minPrice>maxProfit){
            maxProfit=prices[i]-minPrice
        }
    }
    return maxProfit;
};
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let n = prices.length;
    let dp =  Array(n).fill(0).map(item=>{
        return Array(2)
    });
    for(let i = 0;i<n;i++){
        if(i-1==-1){
            dp[i][0]=0;
            dp[i][1]=-prices[i]
            continue;
        }
        dp[i][0]=Math.max(dp[i-1][0],dp[i-1][1]+prices[i])
        dp[i][1]=Math.max(dp[i-1][1],dp[i-1][0]-prices[i]) //-prices[i] 因为只交易一次，交易那次就是支出当天的价格
    }
    return dp[n-1][0]
};
maxProfit([2,4,1])


var maxProfit2 = function(prices) {
    let n = prices.length;
    // base case: dp[-1][0] = 0, dp[-1][1] = -infinity
    let dp_i_0 = 0, dp_i_1 = -infinity;
    for (let i = 0; i < n; i++) {
        // dp[i][0] = max(dp[i-1][0], dp[i-1][1] + prices[i])
        dp_i_0 = Math.max(dp_i_0, dp_i_1 + prices[i]);
        // dp[i][1] = max(dp[i-1][1], -prices[i])
        dp_i_1 = Math.max(dp_i_1, -prices[i]);
    }
    return dp_i_0;
};

