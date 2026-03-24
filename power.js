let a = 64;

function power(a){
    if(a <= 1){
        return false;
    }
    while( a > 1){
        if(a % 2 != 0){
          return false;
        }
        a = Math.floor(a/2);
    }
    return true;
}

console.log(power(a));