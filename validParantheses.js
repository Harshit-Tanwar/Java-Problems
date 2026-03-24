function isValid(s){
    const stack = [];
    const map = {")": "(", "}": "{", "]": "["};
    for (const char of s){
        if(char in map){
            if(stack.length === 0 || stack[stack.length -1] !== map[char]){
                return false;
            }
         stack.pop();
        }else{
            stack.push(char);
        }
    }
    return stack.length === 0;
}

let s = "()[]{";
console.log(isValid(s));
