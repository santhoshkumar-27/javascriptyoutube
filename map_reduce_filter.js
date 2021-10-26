const arr = [35, 32, 33, 85, 89, 90];

console.log(arr);
//map
// const grade = arr.map(function(e){ //function(e){console.log(e)} is a call back function
//     // arr.map() is function the takes parameter as array loop the value's one by one give to call back function
//     // console.log(e);
//     // return e;
//     // let condtion = e >= 35? "Pass":"Fail";
//     // return condtion;
//     return e >= 35? "Pass":"Fail";
// })

//map anonoymus function
const grade = arr.map(e => e >= 35 ? "Pass" : "Fail");
console.log(grade);

// filter anonoymus function
const passGrade = arr.filter(e => e>=35);
// arr.filter(function(e){
//      return e >= 35
// })
console.log(passGrade);

// reduce 

// const sumValues = arr.reduce(function(acc, e){
//     return acc+e;
// }, 0);

const sumValues = arr.reduce((acc, e) => acc+e, 0);
console.log(sumValues);