let suma = 0;
let resta = 0;
let multiplicacion = 0;
let division = 0;
let numero1 = 0;
let numero2 = 0;

numero1 = parseInt (prompt('ingrese un numero:'));
numero2 = parseInt (prompt('ingrese un numero:'));
function sumas(numero1, numero2) {
    suma = numero1 + numero2;
    return suma;
}
sumas(numero1, numero2);
function restas(numero1, numero2) {
    resta = numero1 - numero2;
    return resta;
}
restas(numero1, numero2);
function multiplicaciones(numero1, numero2) {
    multiplicacion = numero1 * numero2;
    return multiplicacion;
}
multiplicaciones(numero1, numero2);
function divisiones(numero1, numero2) {
    division = numero1 / numero2;
    return division;
}
divisiones(numero1, numero2);

alert('la suma es: ' + suma);
alert('la resta es: ' + resta);
alert('la multiplicacion es: ' + multiplicacion);
alert('la division es: ' + division);