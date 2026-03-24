function topKFrequent(nums, k) {
  const counts = {};
  for (let i = 0; i < nums.length; i++) {
    if (!counts[nums[i]]) {
      counts[nums[i]] = 1;
    } else {
      counts[nums[i]] += 1;
    }
  }
  const countList = [];
  for (let elem in counts) {
    countList.push(elem);
  }
  const sorted = countList.sort((a,b)=> a[1] - b[1]);
  return sorted.slice(0 , k);
}

const nums = [1, 1, 1, 2, 2, 3];
let k = 2;
console.log(topKFrequent(nums , k));
