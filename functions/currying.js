function add() {
 return function(a){
    console.log(a);
     return function (b) {
        console.log(a + b);
       return function (c) {
         return a + b + c;
       };
     };
 };
}
const sum = add()(1)(2)(3);
console.log(sum);c
