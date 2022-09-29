function test01(s){
    let length = s.length;
    if(length===2){
        return s;
    }
    let maxLen = 1;
    let begin =0;
    for(let i=0; i<length-1; i++){
        for(let j=i+1; j<length; j++){
            console.log(i,'ii')
            console.log(j,'jjj')
            if(j-i+1>maxLen && valid(s.split(''),i,j)){
                maxLen = j-i+1;
                begin = i
            }
        }
    }
    return s.substring(begin, begin+maxLen);
}

function valid(arr,left,right){
    while(left<right){
        if(arr[left]!=arr[right]){
            return false;
        }
        left++;
        right--;
    }
    return true;
}
