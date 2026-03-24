let sequence = [
    async()=> 1,
    async()=> 2,
]

const sequential = async (fnc) =>{
    const res = [];
    for(const asyncfnc of fnc){
        const result = await asyncfnc();
        res.push(result);
    }
    return res;
}
sequential(sequence).then(console.log);