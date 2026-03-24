let a = [1, 2, 2, 1];
let b = [2, 2];
let res = [];
for (let i = 0; i < a.length; i++) {
  for (let j = 0; j < b.length; j++) {
    if (a[i] === b[j] && !res.includes(a[i])) {
       res.push(a[i]);
    }
  }
}
console.log(res);