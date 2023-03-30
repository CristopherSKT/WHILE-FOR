//Cree un programa que calcule el promedio de 10 números.

let numero;   
let contador = 1;
let acumuladora = 0;
let promedio;
 
while (contador <= 10) {
    numero = parseFloat(prompt("Ingrese los números para sacar el promedio"))
    acumuladora = acumuladora + numero
    promedio = acumuladora/10
    contador++
}
console.log("El promedio de los 10 números es:", promedio);