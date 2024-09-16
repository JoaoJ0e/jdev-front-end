// Logs de mouse

function alertaUsuarios() {
    alert("Ai! Não clica em mim! >:(");
}

function alertaDbClick(){
    alert("DUAS VEZES NÃO, MISERÁVEL!")
}

function logOnMouseOver(){
    console.log("MOUSE OVER")
}

function logOnMouseOut(){
    console.log("MOUSE OUT")
}

function logOnMouseDown(){
    console.log("MOUSE DOWN")
}

function logOnMouseUp(){
    console.log("MOUSE UP")
}

// Logs de teclado

function logKeyDown(event){
    console.log(`KEY DOWN - ${event.key}`);
}

function logKeyUp(){
    console.log("KEY UP");
}

function logKeyPress() {
    console.log("KEY PRESS")
}


// Logs de Forms

function logSubmit(event){
    alert("SUBMIT");
    console.log(document)
    event.preventDefault();
}

function logChange(){
    console.log("CHANGE")
}

function logFocus(){
    console.log("FOCUS")
}

function logBlur(){
    console.log("BLUR")
}

