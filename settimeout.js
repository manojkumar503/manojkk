// set(()=>{
//     console.log("Manojkumar.S");
// },5000);
setInterval(() => {
    console.log("Manojkumar.S");
},2000);
let myPromise = new Promise((resolve, reject) => {
  let success = true;
  if (success) {
    resolve("task done succesfully!");
  } else {
    reject("task failed!");
  }
});

myPromise.then((message) => console.log(message));
myPromise.catch((error) => console.log(error));
  