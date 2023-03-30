/*Cree un programa que imprima el eco de una letra tantas veces como se lo indique. Por ejemplo, si el usuario 
quiere el eco de la letra A cuatro veces, entonces el programa deberá imprimir AAAAA*/

let letra = prompt("Ingrese la letra que quiere que se repita")
let repeticiones = parseFloat(prompt("Ingrese el cuantas veces quiere que se repita la letra"))
let contador = 0;
let acumuladora = "";

while (contador <= repeticiones) {
    acumuladora += letra;
    contador++
}
console.log(acumuladora)