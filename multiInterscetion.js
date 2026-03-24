function intersectionMultiple(arrays) {
    let result = new Set(arrays[0]);
    for (let i = 1; i < arrays.length; i++) {
        const currentSet = new Set(arrays[i]);
        result = new Set([...result].filter(x => currentSet.has(x)));
    }
    return Array.from(result);
}

const a = [[1, 2, 3], [2, 3, 4], [2, 3, 5]];
console.log(intersectionMultiple(a));
