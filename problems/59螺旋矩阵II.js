/**
 * @param {number} n
 * @return {number[][]}
 */
var generateMatrix = function(n) {
    let arr = new Array(n);
    for (let i = 0; i < arr.length; i++) {
         arr[i] = new Array(n);
     }
    let up=0;
    let right=n-1;
    let low=n-1;
    let left=0;
    let num=1
    while(num<=Math.pow(n,2)){
        if(up<=low){
            for(let i=left; i<=right; i++){
                arr[up][i] = num++;
            }
            up++
        }
        if(left<=right){
            for(let i=up; i<=low; i++){
                arr[i][right] =num++
            }
            right--
        }
        if(up<=low){
            for(let i=right; i>=left; i--){
                arr[low][i] =num++
            }
            low--
        }
        if(left<=right){
            for(let i=low; i>=up; i--){
                arr[i][left] =num++
            }
           left++
        }
    }
    return arr
};