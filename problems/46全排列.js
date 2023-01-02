/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
    let track = [];
    let array=[]
    breakTrack(nums, track);
    return array;
    function breakTrack(nums, track) {
        if(track.length===nums.length){
            let newArray = JSON.parse(JSON.stringify(track))
            array.push(newArray)
            return;
        }
        for (let i=0; i<nums.length; i++){
            if(track.indexOf(nums[i])>-1){
                continue
            }
            track.push(nums[i])
            breakTrack(nums, track)
            track.pop()
        }
    }
};
console.log(permute([1,2,3]),'permute([1,2,3])')