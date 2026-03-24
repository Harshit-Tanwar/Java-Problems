let a = [1, 2, 3, 4];
let prod = 1;
for(let i= 1;i<=a.length ;i++){
      prod = prod * [i];
}
for(let i = 0 ; i<a.length;i++){
    a[i] = prod / a[i];
}
console.log(a);