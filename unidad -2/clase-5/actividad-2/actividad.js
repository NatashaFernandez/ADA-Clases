let mayor = 0;
let menor = 0;
let nota = 0;
let i = 0;
while (i < 10) {
    nota = prompt('ingrese una nota:');
    if (nota >= 7) {
        mayor = mayor + 1;
    } else{
        menor = menor + 1;
    }
    i=i+1;
}
alert('El total de mayores es: ' + mayor);
alert('El total de menores es: ' + menor);