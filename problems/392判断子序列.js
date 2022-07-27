var isSubsequence = function(s, t) {
    const length = s.length;
    let newT = t;
    for (let i = 0; i < length; i++) {
        let index = newT.indexOf(s[i])
        newT = newT.slice(index + 1)
        if (index === -1) {
            return false;
        }
    }
    return true
};