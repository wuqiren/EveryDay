/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function(s, t) {
    if (s.length !== t.length) {
        return false
    }
    let map1 = {};
    let map2 = {};

    for (let i = 0; i < s.length; i++) {
        const x = s[i],
            y = t[i];
        if ((map1[x] && map1[x] !== y) || (map2[y] && map2[y] !== x)) {
            return false;
        }
        map1[x] = y;
        map2[y] = x;

    }
    return true
};