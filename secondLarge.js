let a = [10, 5, 8, 12 ,11] ;
let max = 0;
let secondMax = 0;
for(let i = 0;i< a.length;i++){
    if(a[i] > max){
        secondMax = max;
        max = a[i];
    }else if(a[i] > secondMax && a[i] != max){
       secondMax = a[i];
    }
}

console.log(secondMax); 