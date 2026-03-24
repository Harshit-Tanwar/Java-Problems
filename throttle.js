function throttle(func , delay){
    let lastCall= 0;
    return function(...args){
         const now  = Date.now();
         if(now  - lastCall <  delay){
           return;
        }
        lastCall = now;
        func(...args);
    };
}

function test(val){
    console.log("Hello",val);
}
const a = throttle(test , 5000);
a("Rohit");
a("Mohit");
a("Ronit");
a("Virat");
a("Dhoni");
