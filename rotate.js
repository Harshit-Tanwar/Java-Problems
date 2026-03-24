let a = [1,2,3,4,5];
let b =  [];
let k = 3;
for(let i = 0 ;i <= k ;i++){
     b[i] = a.shift();
     a.push(b[i]);
}
console.log(a);