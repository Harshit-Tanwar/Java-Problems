let arr = [
    async () => 1, 
    async () => 2
];
async function add(func) {
    const res = await Promise.all(func.map(fn=> fn()));
    return res.reduce((sum , num)=> sum + num , 0);
}

add(arr).then(console.log);
