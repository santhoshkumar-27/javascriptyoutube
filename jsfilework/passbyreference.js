//pass by reference 
//it take's the memory location address of the variable
//it passes the memory address


function updatedValue(a){
    a.age = 25
}


data = {
    name: 'santhoshkumar',
    age: 22
}

console.log(data);
updatedValue(data);
console.log(data);