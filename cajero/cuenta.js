
/* Usuarios que se van a usar no use un array porque la neta no le encuentro mucho sentido */
let pregunta = prompt("Elige un usuario [ Mali, Gera o Maui]");

let nombre = pregunta.trim().toLowerCase();

let saldo;

function usuario() {

    let invocacionDeYutsu = window.onload = function(){
        document.getElementById("dinero").innerHTML = saldo;
    }

    if (nombre == "mali") {
        saldo = 200;

        invocacionDeYutsu;

        return;

    } else if(nombre == "gera"){
        saldo = 290;

        invocacionDeYutsu;

        return;

    } else if(nombre == "maui") {
        saldo = 67;

        invocacionDeYutsu;

        return;

    }else {
        alert("No jala");
        return;
    }
}

/* Aquí se manda llamar la funcion con el usuario */
usuario(nombre);

/* Esta parte es la que hace todo el proceso del deposito y muestra el saldo total */

function ingresar() {
     let ingresoCantidad = parseInt(prompt("¿Cuanto quieres depositar?"));

     let operacionIngreso = saldo + ingresoCantidad;

     if ((saldo + operacionIngreso - saldo)  > 990 ) {

        alert("No puedes depositar esa cantidad, solo puedes tener $990 en tu cuenta");

        return;
        
    } else {

        document.getElementById("dinero").innerHTML = operacionIngreso; 

        saldo = operacionIngreso;

        return;
    }
}

function retirar() {
    let retiroCantidad = parseInt(prompt("¿Cuanto quieres sacar?"));

    let operacionRetiro = saldo - retiroCantidad;

    if (operacionRetiro >= 10 ) {

        document.getElementById("dinero").innerHTML = operacionRetiro;

        saldo = operacionRetiro;

        return;
        
    } else {

        /* Solucion poco elegante pero creo que se ve bien, LOL */

        alert("No puedes dejar tu cuenta en ceros, el minimo que debe haber en tu cuenta son $10 pesos");

        return;
    }
}

function regresar(){
    location="index.html"
}