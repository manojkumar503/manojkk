// let students = ["Anu", "ravi", "mona"];
// console.log(students[0]);
// console.log(students[1]);
// console.log(students[2]);

// for (let i = 0; i < students.length; i++) {
//   console.log(students.length);
//   let a = [1, 2];
//   a.push(3);
//   console.log(a);

//   let b = [1, 2];
//   b.pop();
//   console.log(b);

//   let c = [2, 3];
//   c.unshift(1);
//   console.log(c);
// }
// //objects
// let user = {
//   name: "Manojkumar",
//   age: 19,
// };
// console.log(Object.keys(user));
// console.log(Object.values(user));
// user.city = "Delhi";
// console.log(user);
// delete user.age;
// console.log(Object.keys(user));

let arr=[10,20,30,40,50,60];
for(let i=0;i<=5;i++){
  console.log(arr[i]);
}
console.log("using the for each");
//using forEach
arr.forEach(mark=>{
  console.log(mark);
});

let updatedmarks=arr.map(mark=>mark+5);
console.log(updatedmarks);

let top=updatedmarks.filter(mark=>mark>10);
console.log(top);

let f=updatedmarks.find(mark=>mark>10);
console.log(f);
