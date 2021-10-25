// alert("hello World");
// alert("4551adsf");
console.log("Hello World");


function globalname(){
    // var name = "sandy"; //this is only functione local scope variable inside the function
    name = "sandy" //now this will act us the global scope 
    console.log("inside the function, ", name);
}


globalname();
console.log("outside the function, ", name);



function letvar(){
    var funscope = "twilight"; //var is function scope
    console.log(funscope);
    if(true){
        let blockscope = "it solution";   //let is block scope
        console.log(blockscope);
    }
    // console.log(blockscope);

}

letvar();