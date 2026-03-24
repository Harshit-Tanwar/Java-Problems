let a = [1,2,4,5];
let b = a[a.length-1];
let total  =  (b*(b+1))/2;
let sumtotal = 0;
a.forEach(e =>{
    sumtotal = sumtotal + e;
})
let missing = total - sumtotal;
console.log(missing);


// Conversion of string to int
let s = "123";
let v = Number(s);
console.log(v);