function prime(a){
    if(a <= 1){
        return false;
    }
    if(a === 2)
        return true;
    if(a % 2 === 0){
        return(false);
    }
    const s = Math.sqrt(a);
    for(let i = 3; i<= s; i+=2){
        if(a % i === 0){
            return false;
        }
    }
    return true;
}

console.log(prime(9));