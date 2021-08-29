/*4-Se cuenta con la siguiente información:
Las edades de 5 estudiantes del turno mañana.
Las edades de 6 estudiantes del turno tarde.
Las edades de 11 estudiantes del turno noche.
Las edades de cada estudiante deben ingresarse por teclado.
a) Obtener el promedio de las edades de cada turno (tres promedios).
b) Imprimir dichos promedios (promedio de cada turno)
c) Mostrar por pantalla un mensaje que indique cual de los tres turnos tiene un promedio de 
edades mayor.*/

let eTurnoMañana = 0;
let totalTM = 0;
let eTurnoTarde = 0;
let totalTT = 0;
let eTurnoNoche = 0;
let totalTN = 0;
let promTurnoMañana = 0;
let promTurnoTarde = 0;
let promTurnoNoche = 0;
let i = 0;

for (i = 0; i < 4; i++) {
    eTurnoMañana = prompt('ingrese una edad del turno mañana:');
    totalTM = totalTM + eTurnoMañana;
}
promTurnoMañana = totalTM / 4;

for (i = 0; i < 6; i++) {
    eTurnoTarde = prompt('ingrese una edad del turno tarde:');
    totalTT = totalTT + eTurnoTarde;
}
promTurnoTarde = totalTT / 6;

for (i = 0; i < 11; i++) {
    eTurnoNoche = prompt('ingrese una edad del turno noche:');
    totalTN = totalTN + eTurnoNoche;
}
promTurnoNoche = totalTN / 11;

document.write('El promedio total del turno Mañana es:' + promTurnoMañana + '<br>');
document.write('El promedio total del turno Tarde es:' + promTurnoTarde + '<br>');
document.write('El promedio total del turno Noche es:' + promTurnoNoche + '<br>');

if (promTurnoMañana > promTurnoTarde && promTurnoMañana > promTurnoNoche) {
    document.write('El promedio mayor es:' + promTurnoMañana);
} else if (promTurnoTarde > promTurnoNoche) {
    document.write('El promedio mayor es:' + promTurnoTarde);
} else {
    document.write('El promedio mayor es:' + promTurnoNoche);
}