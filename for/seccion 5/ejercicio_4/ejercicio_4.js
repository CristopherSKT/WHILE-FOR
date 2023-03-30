//Cree un programa que calcule el promedio de 10 números. Use ciclo for.

let acumuladora = 0;
let promedio = 0;

for (let index = 1; index <= 10; index++) {
    let num = parseFloat(prompt("Ingrese los numeros a sacar el promedio"));
    acumuladora = acumuladora + num;
    promedio = acumuladora/index
    
}
console.log("El promedio de los números sumados es:",promedio);