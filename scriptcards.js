// // let a = 30;
// let b = 20;

// function add(a, b) {
//     let sum = a + b;
//     console.log(sum);
// }

// add(3, 5);
// add(4, 5);

// // Missing function added
// function greting() {
//     console.log("Good Morning!");
// }
// greting();

// const addition = (a, b) => {
//     return a + b;
// };

// let result = addition(5, 7);
// console.log("The addition result is: " + result);
// let a=[1,2,3,4];
// console.log(a);
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
let user={
    name:"Manojkumar",
    age:19,

};
console.log(Object.keys(user));
console.log(Object.values(user));
user.city="Delhi";
console.log(user);
delete user.age;
console.log(Object.keys(user));