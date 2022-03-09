var solution = function(isBadVersion) {
    /**
     * @param {integer} n Total versions
     * @return {integer} The first bad version
     */
     return function(n) {
        var min = 1;
        var max = n;
        while (min < max) {
            var mid =Math.floor(min+(max-min)/2)
            if(isBadVersion(mid)){
                max=mid;
            }else{
                 min=mid+1;
            }
        }
        return min
    };
};