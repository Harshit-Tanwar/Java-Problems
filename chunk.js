let a = [1, 2, 3, 4, 5];
let size = 2;
let chunks = [];
for (let i = 0; i < a.length; i += size) {
  let chunk = [];
  for (let j = i; j < i + size && j < a.length; j++) {
    chunk.push(a[j]);
  }
  chunks.push(chunk);
}
console.log(chunks);
