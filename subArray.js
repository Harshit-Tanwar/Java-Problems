function maxArray(a){
    let max = -Infinity;
    for(let i=0;i<a.length;i++){
        let sum  = 0;
        for(let j = i;j<a.length;j++){
            sum += a[j];
            max = Math.max(max , sum);
        }
    }
    return max;
}
const a = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
console.log(maxArray(a));
