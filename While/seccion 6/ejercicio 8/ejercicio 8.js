/*Cree un programa que calcule la suma de los cuadrados de los 
números entre 1 y n.*/

let numero = parseFloat(prompt("Ingrese hasta que número quiere saber la suma"))
let contador = 1;
let acumuladora = 0;

while (contador <= numero) {
    // acumuladora += contador**2 es lo mismo que acumuladora = acumuladora + contador*contador
    acumuladora += contador**2;
    contador++;
}

console.log("La suma de los cuadrados de los números es:",acumuladora);