/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */


var rotate = function(matrix) {
    let n = matrix.length;
    for (let i = 0; i < n;i++){
        for(let j = i; j <n;j++){
            let other=matrix[i][j];
            matrix[i][j]=matrix[j][i]
            matrix[j][i]=other;
        }
    }
    for(let i = 0; i < n; i++){
        matrix[i].reverse()
    }
    return matrix
};