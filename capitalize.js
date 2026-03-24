let s = "hello world";
let words = s.split(' ');
let cap = "";
words.map((word)=>{
    if(word.length > 0){
        cap = cap + word.charAt(0).toUpperCase() + word.slice(1);
    }
})
console.log(cap);