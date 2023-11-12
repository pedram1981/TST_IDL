const promise1 = new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('Promise 1');
      resolve();
    }, 1000);
  });
  
  const promise2 = new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('Promise 2');
      resolve();
    }, 500);
  });
  
  const promise3 = new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('Promise 3');
      resolve();
    }, 2000);
  });
  
  Promise.all([promise1, promise2, promise3])
    .then(() => {
      console.log('All promises resolved');
    })
    .catch((err) => {
      console.error(err);
    });