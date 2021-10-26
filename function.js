//function arguments, return

function getResult(marks) {
    let result;
    if (marks > 40) {
        result = "you got passed";
    } else {
        result = "you got failed";
    }
    return result;
}

console.log(getResult(55));


// function expression vs function declaration

//function declaration
var func = function(){
    return "hello world";
};

console.log(func());


// fatArrowfunction

// let fatArrFun = () => {
//     return "hello Universe";
// }
let fatArrFun = () => "hello Universe";
console.log(fatArrFun());