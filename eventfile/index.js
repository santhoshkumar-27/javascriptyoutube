function onButtonClick(){
    // return "click";
    console.log('button clicked');
}

function keypresscode(e){
    if(e.code === "Enter")
        // console.log(e.target.value);
        console.log(e.type);
}


function onEventListener(e){
    console.log(e)
    console.log(`This is what type of event, ${e.type}`)
}