let altura = 0;
let promedio = 0;
let total = 0;
let i = 0;
while (i < 5) {
    altura = prompt('ingrese una altura:');
    total = total + altura;
    i++;
}
promedio = total / 5;
alert('El promedio de alturas es: ' + promedio);