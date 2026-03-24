let promises = [
    Promise.resolve(1),
    Promise.resolve(2)
] 
Promise.all(promises).then(results =>{
    console.log(results);
}).catch(err =>{
    console.log(err);
})

promises();