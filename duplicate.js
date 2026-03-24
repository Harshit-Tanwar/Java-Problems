let arr = [1, 2, 2, 3, 1];
arr.sort;
let newArr = [];
for (let i = 1; i < arr.length; i++) {
  if (!(arr[i] == arr[i - 1])) {
    newArr.push(arr[i]);
  }
}
console.log(newArr);

let flag = false;
for (let i = 1; i < arr.length; i++) {
  if (!(arr[i] == arr[i - 1])) {
    flag = true;
  } else {
    flag = false;
  }
}
console.log(flag);