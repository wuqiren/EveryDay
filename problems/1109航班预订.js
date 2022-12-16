class Difference{
    constructor(nums){
        this.diff=new Array(nums.length);
        this.diff[0]=nums[0];
        for(var i=1; i<nums.length;i++){
            this.diff[i]=nums[i]-nums[i-1];
        }
    }

    increment(i,j,value){
        console.log(i,'iiii')
        console.log(j,'jjjj')
        console.log(value,'value')
        console.log(this.diff,'this.diffthis.diff')
        this.diff[i]+=value;
        if(j<this.diff.length){
            this.diff[j+1]-=value;
        }
        console.log(this.diff,'222')
    }
    returnResult(){
        const res=new Array(this.diff.length)
        res[0]=this.diff[0]
        for(let i=1;i<this.diff.length;i++){
            res[i]=res[i-1]+this.diff[i]
        }
        return res
    }
}

/**
 * @param {number[][]} bookings
 * @param {number} n
 * @return {number[]}
 */
var corpFlightBookings1 = function(bookings, n) {
    let nums=new Array(n)
    const df = new Difference(nums)
    for(let i of bookings){
        const a = i[0]-1;
        const b=i[1]-1;
        const value =i[2]
        df.increment(a,b,value)
    }
    return df.returnResult()
};
var corpFlightBookings = function(bookings, n) {
    const nums = new Array(n).fill(0);
    for (const booking of bookings) {
        nums[booking[0] - 1] += booking[2];
        if (booking[1] < n) {
            nums[booking[1]] -= booking[2];
        }
    }
    for (let i = 1; i < n; i++) {
        nums[i] += nums[i - 1];
    }
    return nums;
};


corpFlightBookings([[1,2,10],[2,3,20],[2,5,25]],5)