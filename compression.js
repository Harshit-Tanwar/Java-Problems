let s = "aabcccccaaa";
let n = s.length;
let i = 0;
let a = "";
while (i < n) {
  let repeat = 1;
  while (s[i] == s[i + 1] && i < n - 1) {
    repeat++;
    i++;
  }
  a = a + s[i]+repeat;
  i++;
}

console.log(a);