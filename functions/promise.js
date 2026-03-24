function promiseFunction(){
    return new Promise((resolve , reject)=>{
        setTimeout(()=>{
            resolve("Done");
            reject("error");
        }, 1000)
    })
}
promiseFunction().then(message =>{
    console.log(message);
}).catch(error =>{
    console.log(error);
});