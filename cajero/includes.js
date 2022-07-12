

let generadorPin = parseInt(prompt("Genere una clave de 4 digitos"));

let codigo = generadorPin;

function ingreso(form) {
    if (form.pin.value == codigo) {
        location="principal.html"
    } else {
        alert("Ingresa el Pin que generaste")
    }
}