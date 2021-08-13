function sumar() {
    var num1 = 100;
    var num2 = 200;
    var resultado=0;
    /*resultado*/
    resultado= num1+num2;
    return resultado;
}

document.write(sumar());
/*segundo ejemplo de suma sumar1=5*/
function sumar1(numero) {
    var misuma=numero + 2;

    return misuma;
}
document.write(sumar1(3));

function conver_dolar(dolares, nombre) {
    var dolares=100;
    var resultado = dolares*102;
    document.write("el resultado del dolar es "+resultado+"para vos"+nombre);
}
conver_dolar(200,"pedro");