let words = 'Hello World how are you';
let myRegex = /hello/gi;
//let myRegex = /wel(c|d|j|k)ome/igm; m for multiline
// let myRegex = /wel[a-zA-z0-8]ome/ig;
// let myRegex = /welco?me/gi; its ? is 0 or 1 letter
// let myRegex = /welco+me/gi; its 1 or more letter continues
// let myRegex = /welco*me/gi; its 0 or more letter continues
// let myRegex = /welco{2, 3}me/gi;
// let myRegex = /Welc.me/gi; dot(.)is the any character like welcome welcqme welc3me welc4me
// let myRegex = /me$/gi; //it only see the end of the string 
// let result = myRegex.test(words);


// /@|(gmail.com)$/
let result = words.match(myRegex);
console.log(result);