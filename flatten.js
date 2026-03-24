let a = [1, [2, 3], [4, [5]]];
for(let i = 0;i<a.length;i++){
    a.concat(...a[i]);
}
console.log(a);