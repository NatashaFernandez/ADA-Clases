/*Calculadora de imc. Ingresar datos para saber su imc indice de masa corporal.
 Parametros de cada peso, obesidad 1 2 o 3*/
let imc = 0;
let peso = 0;
let altura = 0;
altura = prompt('ingrese una altura:');
peso = prompt('ingrese un peso:');

imc = parseFloat(peso / ((altura / 100) * (altura / 100)));
document.write('Su peso es de: ' + peso + '<br>' + 'Y su altura es de:' + altura + '<br>');
if (imc < 16) {
    +'<br>'
    document.write('Su IMC es de: ' + imc + ' Corresponde a: Delgadez severa');
} else if (16.99) {
    document.write('Su IMC es de: ' + imc + ' Corresponde a: Delgadez moderada');
} else if (18.49) {
    document.write('Su IMC es de: ' + imc + ' Corresponde a: Delgadez aceptable');
} else if (24.99) {
    document.write('Su IMC es de: ' + imc + ' Corresponde a: Peso normal');
} else if (29.99) {
    document.write('Su IMC es de: ' + imc + ' Corresponde a: Sobrepeso');
} else if (34.99) {
    document.write('Su IMC es de: ' + imc + ' Corresponde a: Obesidad');
} else {
    document.write('Su IMC es de: ' + imc + ' Corresponde a: Obesidad Morvida');
}