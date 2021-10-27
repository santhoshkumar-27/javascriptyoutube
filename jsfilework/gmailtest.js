let gmailTester = 'santhoshkumar@gmail.com';
let myRegex = /^([a-z0-9]{1,20})@([a-z0-9]{1,20}\.[a-z]{2,})$/gi;

//test mail
// [a-z0-9]{1,20}@[a-z0-9]{1,10}\.[a-z]{2,}$
let mailTest = myRegex.test(gmailTester);
let resultFlow = gmailTester.match(myRegex);
console.log(mailTest);
console.log(resultFlow);