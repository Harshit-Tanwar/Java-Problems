let s = "Hello , I : am ' always";
s.toLowerCase;
count = 0;
const v = ["a" , "e" , "i" , "o" , "u"];
for(let i = 0; i < s.length ;i++){
    if(v.includes(s.charAt(i))){
        count++;
    }
}
console.log(count);