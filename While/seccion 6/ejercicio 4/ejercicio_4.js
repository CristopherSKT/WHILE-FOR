//Cree un programa que muestre los números impares entre 1 y n.

let contador = 0;
let limite = parseFloat(prompt("Ingrese el número hasta donde quiera ver los impares"));


while (contador <= limite) {
    if (contador%2!=0) {
        console.log("el numero es impar",contador)
    }
    contador++

}
console.log("Los números impares del 1 al", limite);

