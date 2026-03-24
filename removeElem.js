let a = [3,2,2,3];
let val = 3;
let k = 0;
for(let i=0;i<a.length;i++){
   if(a[i] !== val){
       [a[k]  ,a[i]] = [a[i], a[k]];
       k += 1;
   }
}
console.log(k);