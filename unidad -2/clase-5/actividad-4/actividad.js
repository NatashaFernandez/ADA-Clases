let impar = 0;
let par = 0;
let num = 0;
let i = 0;
while (i < 5) {
    num = prompt('ingrese un numero:');
    if (num % 2 == 0) {
        par = par + 1;
    } else {
        impar = impar + 1;
    }
    i = i + 1;
}
alert('El total de pares es: ' + par);
alert('El total de impares es: ' + impar);