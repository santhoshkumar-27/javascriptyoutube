let firstObject = {
    name: "santhoshkumar",
    age: 22
}

console.log(firstObject);
// spread operators

firstObject = {
    ...firstObject,
    work: 'front-end developer'
}

console.log(firstObject);

// rest operators
let {age, name, work, ...rest} = firstObject;

console.log(age);
console.log(rest);
console.log(name);
console.log(work);