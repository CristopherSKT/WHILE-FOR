//Cree un programa que calcula la suma de los primeros n números naturales.

let num_s  = parseFloat(prompt("Ingrese el numero para calcular la suma de los primeros numeros"))
let contador = 1;
let acumulador = 0;
while (contador <= num_s) {
    acumulador = acumulador+contador
    console.log(acumulador)
    contador++;
}
