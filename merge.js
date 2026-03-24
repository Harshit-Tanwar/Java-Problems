let a = [1, 3, 5];
let b = [2, 4, 6];
let i = a.length - 1;
let j = b.length - 1;
let k = i + j + 1;
while (i >= 0 && j >= 0) {
  if (a[i] > b[j]) {
    a[k] = a[i];
    k--;
    i--;
  } else {
    a[k] = b[j];
    k--;
    j--;
  }
}
while (j >= 0) {
  a[k] = a[j];
  k--;
  j--;
}
console.log(a);
