/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    let stack=[];
    let len = s.length
    const charOf = (c)=>{
        if(c===')') return '('
        if(c==='}') return '{'
        return '['
    }
    for(let i=0;i<len;i++){
        if(s[i]==='('||s[i]==='{'||s[i]==='['){
            stack.push(s[i])
        }else{
            if(stack.length && charOf(s[i])===stack[stack.length-1]){
                stack.pop()
            }else{
                return false
            }
        }
    }
    return stack.length ===0
};
console.log(isValid("()[]{}"))


var isValid = function(s) {
    let stack = []
 let map = new Map()
 map.set(")", "(")
 map.set("]", "[")
 map.set("}", "{")
 for (let i = 0; i < s.length; i++) {
     if (!map.has(s[i])) {
         stack.push(s[i])
     } else {
         if (map.get(s[i]) != stack.pop()) {
             return false
         }
     }
 }
 return !stack.length
}