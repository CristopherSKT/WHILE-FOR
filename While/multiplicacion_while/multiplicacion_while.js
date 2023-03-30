let num1 = parseFloat(prompt("Ingrese el primer número a multiplicar"))
let num2 = parseFloat(prompt("Ingrese el segundo número a multiplicar"))
let contador = 1;
let multiplicacion = 0;

while (contador <= num2) {
    multiplicacion = multiplicacion + num1
    contador++
}
console.log("El resultado de la suma es;", multiplicacion)