let a = [2, 7, 11, 15];
let target = 9;
for(let i = 0; i<a.length;i++){
    for(let j = 0;j<a.length;j++){
        if(a[i] + a[j] == target){
            console.log(a[i] +' '+a[j]);
            console.log(i +' '+ j);
        }
    }
}
