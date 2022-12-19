/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {
    let m=matrix[0].length
    let n = matrix.length
    let upper=0;
    let right =m-1;
    let low=n-1
    let left=0;
    const arr = [];
    while (arr.length <(m*n)) {
        // 在顶部从左向右遍历
        if(upper<=low){
            for(let i=left; i<=right; i++) {
                arr.push(matrix[upper][i])
            }
            upper++
        }
        if(left<=right){
             // 在右侧从上向下遍历
            for(let i=upper; i<=low; i++) {
                arr.push(matrix[i][right])
            }
            right--
        }
        if(upper<=low){
             // 在底部从右向左遍历
            for(let i=right; i>=left; i--) {
                arr.push(matrix[low][i])
            }
            low--
        }
        if(left<=right){
               // 在左侧从下向上遍历
            for(let i=low; i>=upper; i--) {
                arr.push(matrix[i][left])
            }
            left++
        }
    }
    return arr
};