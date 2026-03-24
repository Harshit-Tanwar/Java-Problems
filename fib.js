let n = 5;
let a = 0 ;
let b = 1;
console.log(a);
console.log(b);
for(let i = 3;i <= n;i++){
     let temp = a + b;
     a = b;
     b = temp;
     console.log(temp);
}