let number =0;
let numbersecret =0;
let intentos = 0;

function radomNumber() {
    document.getElementById("message").innerHTML = "";
    try{
        number = parseInt(document.getElementById("input").value);
        if (number <0 || isNaN(number)) {
            document.getElementById("message").innerHTML = "Digita un numero valido";
            return;
        }
        numbersecret = Math.floor(Math.random() * number);
        const button =  document.getElementById("bNumber");
        button.setAttribute("onclick", "compareNumbers()");
        document.getElementById("title").innerHTML = "Ingresa un numero";
        document.getElementById("bNumber").innerHTML = "Comprobar";
        document.getElementById("input").value = "";
    }
    catch{
        document.getElementById("message").innerHTML = "Numero invalido";
    }

    
}


function compareNumbers() {
   
    if (intentos==3){
        document.getElementById("message").innerHTML = "Perdiste";
        document.getElementById("bNumber").setAttribute("onclick", "restart()");
        document.getElementById("bNumber").innerHTML = "Reiniciar";
        document.getElementById("title").innerHTML = "El numero secreto era: " + numbersecret;
        intentos = 0;   
        return;
    }
    number = parseInt(document.getElementById("input").value);
    if (number <0 || isNaN(number)){
        document.getElementById("message").innerHTML = "Digita un numero valido";
        return;
    }
    if (numbersecret == number) {
        document.getElementById("message").innerHTML = "Adivinaste el numero secreto";
    }
    else if (numbersecret-number < 5 ) {
        document.getElementById("message").innerHTML = "Muy muy muy cerca";
        intentos++;
    }
    else if (numbersecret-number < 10 ) {
        document.getElementById("message").innerHTML = "Muy muy cerca";
        intentos++;
    }
    else if (numbersecret-number < 20 ) {
        document.getElementById("message").innerHTML = "Muy cerca";
        intentos++;
    }
    else if (numbersecret-number < 30 ) {
        document.getElementById("message").innerHTML = "Cerca";
        intentos++;
    }
    else if (numbersecret-number < 40 ) {
        document.getElementById("message").innerHTML = "Lejos";
        intentos++;
    }
    else if (numbersecret-number < 50 ) {
        document.getElementById("message").innerHTML = "Muy lejos";
        intentos++;
    }

    document.getElementById("attempts").innerHTML =  intentos;
}

function restart() {
    document.getElementById("title").innerHTML = "Ingresa un Rango de numeros (10,20,30,..):";
    document.getElementById("attempts").innerHTML =  intentos;
    document.getElementById("bNumber").innerHTML = "Generar Numero";
    document.getElementById("bNumber").setAttribute("onclick", "radomNumber()");
    document.getElementById("message").innerHTML = "";

}