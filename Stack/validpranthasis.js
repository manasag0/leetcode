/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    const stack = [];
    const mapping = { '(': ')', '{': '}', '[': ']' };

    for(const char of s){
        if(mapping[char]){
            stack.push(char);
        }
        else{
            const last = stack.pop()

            if(char !== mapping [last]){
                return false 
            }
        }
    }
    return stack.length === 0
};


console.log(isValid("(][]()(("))
