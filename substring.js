let a = "abcabcbb";
const charSet = new Set();
let left = 0;
let maxLength = 0;

for (let right = 0; right < a.length; right++) {
  while (charSet.has(a[right])) {
    charSet.delete(a[left]);
    left++;
  }
  charSet.add(a[right]);
  maxLength = Math.max(maxLength, right - left + 1);
}
console.log(first)