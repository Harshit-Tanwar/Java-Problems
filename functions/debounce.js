function debounce(func , delay){
   let timeout;
   return function(...args){
     clearTimeout(timeout);
     timeout = setTimeout(()=>{
        func.apply(this , args);
        console.log("-");
     }, delay);
   }
}

function test(val){
    console.log(val);
}
let d = debounce(test , 500);
d("Hello");
d("Heyy");
d("Hiii");