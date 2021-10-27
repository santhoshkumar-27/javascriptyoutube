
//pass by value it only pass the value to function its primitive data type

function updatedValue(a){
    ++a;
}

let x = 2;

console.log(x);
updatedValue(x);
console.log(x);