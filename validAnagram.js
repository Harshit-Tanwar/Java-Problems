let s1 = "anagram";
let s2 = "nagaram";

function valid(s1 ,s2){
    if(s1.length != s1.length){
        return false;
    }
    s1 = s1.split('').sort().join('');
    s2 = s2.split('').sort().join('');

    return s1 === s2;
}
console.log(valid(s1 , s2));