async function retryPromise(fn, retry) {
  for (let i = 0; i <= retry; i++) {
    try {
      return await fn();
    } catch (err) {
      if (i === retry) throw err;
    }
  }
}

const call = () => {
  return new Promise((resolve, reject) => {
    if (Math.random() > 0.7) {
      resolve("Success!");
    } else {
      reject("Failed!");
    }
  });
};

retryPromise(call, 3)
  .then((result) => console.log(result))
  .catch((error) => console.error(`Final error: ${error}`)); 
