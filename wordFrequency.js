let a = "hello world hello";
const words = a.split(' ');
const frequency = {};

for(const word of words){
    if(word.length > 0){
        frequency[word] = (frequency[word] || 0) + 1; 
    }
}

console.log(frequency);