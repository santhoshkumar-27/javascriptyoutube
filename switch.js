function calculator(operator){
    switch(operator){
        case "+":
            console.log(20+10);
            break;
        case "-":
            console.log(50-65);
            break;
        case "*":
            console.log(2*1);
            break;
        case "/":   
            console.log(5/1);
            break;
        default:
            console.log("You enter the wrong operator");            
    }
}


calculator("+");