/* alert("hola");

document.write("JS");

console.log("esto es texto", prompt("¿Como te llamas?")); */

/* Tpos de datos Primitivos

    Strings - (cadenas de caracteres)
    numbers - (numeros)
    booleans - (verdadero o falso)
    
    Null
    Undefined

    Symbols - (Simbolo)

    Datos Prototipos

    Array []

    Object {}

 */

    // Variables

   /*  var nombreDeLaVariable;

    var primerNombre = "Jona";

    console.log(primerNombre); */

    // declara una variable

/* ß */
    

    /* console.log("line 2 ", comida); */

    // declarar y asignar una variable

    /* var pantalla = "Samsung";

    console.log(pantalla); */

    //  asignar el valor a la primer variable

 /*    comida = "Pozole";

    console.log(comida); */

    // Declara una variable por cada tipo de dato
/* 
    var dulce = "chicle";

    console.log(dulce);

    var numero = 2;

    console.log(numero);

    var pregunta = true;

    console.log(pregunta); */

    // imprime en consola una suma

/*     console.log(1 + 2); */

    // Declara y asigna dos variables y numericas e imprime en consola la suma de esas variables

    /* var num1 = 2;
    var num2 = 10;

    console.log(num1 + num2); */

  /*   const numbers = document.getElementById('numbers');
    const result = document.getElementById('result');

    let a = parseInt( prompt ('Introduzca el primer número') );
    let b = parseInt( prompt ('Introduzca el segundo número') );
    let c = parseInt( prompt ('Introduzca el tercer número') );

    document.write(`Los numeros introducidos son ${a}, ${b}, ${c}`); */

    /* Ejercicio Order 3 números de mayor a menor */

    /* 
    
        abc - 321
        acb - 312
        bac - 231
        bca - 132
        cab - 213
        cba - 123
    
    */

  /*   if(a >= b && a >= c){
        if(b > c){
            document.write("<br>");
            document.write("<br>");
            document.write(`El orden es ${a}, ${b}, ${c}`);
        }else {
            document.write("<br>");
            document.write("<br>");
            document.write(`El orden es ${a}, ${c}, ${b}`);
        }
    }else if(b >= a && b >= c) {
        if(a > c){
            document.write("<br>");
            document.write("<br>");
            document.write(`El orden es ${b}, ${a}, ${c}`);
        }else {
            document.write("<br>");
            document.write("<br>");
            document.write(`El orden es ${b}, ${c}, ${a}`);
        }
    }else if(c >= a && c >= b){
        if(a > b){
            document.write("<br>");
            document.write("<br>");
            document.write(`El orden es ${c}, ${a}, ${b}`);
        }else {
            document.write("<br>");
            document.write("<br>");
            document.write(`El orden es ${c}, ${b}, ${a}`);
        }
    } */

    /* Estructura Switch */

    /* let num = 2;

    switch(num){
        case 1: console.log('Num tiene el valor de 1');
        break;
        
        case 2: console.log('Num tiene el valor de 2');
        break;

        case 3: console.log('Num tiene el valor de 3');
        break;

        default: console.log('Num tiene un valor distinto a 1, 2, 3');
    }

    switch(num){
            case 1:
            case 3:
            case 5:

        console.log('Num es impar');
            break;

            case 2:
            case 4:
            case 6:

        console.log('Num es par');

    } */

  /*   Solicitar al usuario que responda a la pregunta (“¿Eres bellisimo/a?”), en caso de contestar sí, responder “Ciertamente”, en caso de contestar no, responder: “No te creo”. */

/* let pregunta = prompt("¿Eres bellisimo/a?");

if (pregunta == "Sí") {
    document.write("Ciertamente");
}else {
    document.write("No te creo");
} */


/* Solicitar al usuario un número, y determinar si es divisible entre dos o no. Mostrando al usuario un mensaje de “x número es divisible entre 2” o “x número no es divisible entre dos" */


/* let numero = parseInt(prompt("Ingresa un número"));

if(numero % 2){
    document.write(`${numero} no es divisible entre 2`);
}else {
    document.write(`${numero} es divisible entre 2`);
} */

/* let clima = prompt("¿Como esta el clima? [Soleado, Lluvioso, Nublado, Chubasco, Nevado] escribe uno de los anteriores");

switch(clima) {
    case "Soleado":
        document.write("Esta Soleado, usa bloqueador");
    break;

    case "Lluvioso":
        document.write("Esta Lluvioso, saca el cafe y el pan");
    break;

    case "Nublado":
        document.write("Esta Nublado, que chido clima");
    break;

    case "Chubasco":
    break;

    case "Nevado":
        document.write("Esta Nevando, no olvides usar chamarra");
    break;

    default:
        document.write("¿Que pedo con ese clima?");
} */

/* Arrays o arreglos */

/* let frutas = ["Pera", "Sandia", "Manzana", "Durian"]; */
/* 
document.write(`Me gusta la ${frutas[0]} pero odio la ${frutas[2]}`); */