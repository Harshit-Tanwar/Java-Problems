function search(a, target) {
  let i = 0;
  let j = a.length - 1;
  while (i <= j) {
    let mid = Math.floor((i + j) / 2);
    if (a[mid] == target) {
      return mid;
    }
    if (a[i] <= a[mid]) {
      if (a[i] <= target && target < a[mid]) {
        j = mid - 1;
      } else {
        i = mid + 1;
      }
    } else {
      if (a[mid] < target && target <= a[high]) {
        i = mid + 1;
      } else {
        j = mid - 1;
      }
    }
  }
  return -1;
}
const a = [4, 5, 6, 7, 0, 1, 2];
const target = 0;
console.log(search(a, target));
