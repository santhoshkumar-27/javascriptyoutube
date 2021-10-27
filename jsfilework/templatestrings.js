name = "santhoshkumar";
age = "22";

/*
I need it like this
name: santhoshkumar
age: 22
*/

// console.log('name: ' + name);
// console.log('age: ' + age);


// alternate this

template = `
name: ${name}
 age: ${age}
`

console.log(template);