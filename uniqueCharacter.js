function firstUniqChar(a){
    let frequency ={};
     for(let char of a){
        frequency[char] = (frequency[char] || 0) + 1;
     }
     for(let i = 0;i< a.length; i++){
        if(frequency[a[i]]  == 1){
            return i;
        }
     }
     return -1;
}

const a = "loveleetcode";
console.log(firstUniqChar(a));