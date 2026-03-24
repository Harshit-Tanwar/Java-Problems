let a = "babad";
function longestPalindrome(str) {
  let start = 0,end = 0;
  for (let mid = start; mid < str.length; mid++) {
    let l1 = expandMid(str, mid, mid);
    let l2 = expandMid(str, mid, mid + 1);
    let max = Math.max(l1, l2);

    if (max > end - start) {
      start = mid - Math.floor((max - 1) / 2);
      end = mid + Math.floor((max - 1) / 2);
    }
  }
  return str.substring(start, end + 1);
}
function expandMid(str, left, right) {
  while (left >= 0 && right < str.length && str[left] === str[right]) {
    left--;
    right++;
  }
  return right - left - 1;
}

console.log(longestPalindrome(a));
