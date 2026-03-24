let a = [0, 1, 0, 3, 12];
let count = 0;
for (let i = 0; i < a.length; i++) {
  if (a[i] != 0) {
    a[count++] = a[i];
  }
}
while (count < a.length) {
  a[count++] = 0;
}

console.log(a);
