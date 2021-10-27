p = document.getElementById('container');
console.log(p)

console.log(p.children);
//parent to children
console.log(Array.from(p.children));

//children to parent

java = document.getElementById('java');

console.log(java);
console.log(java.parentElement);
console.log(java.previousElementSibling)