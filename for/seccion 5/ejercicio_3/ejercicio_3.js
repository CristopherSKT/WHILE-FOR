/* Cree un programa que muestre los números impares entre 1 y n.
Use ciclo for*/

let num = parseInt(prompt("Ingrese el numero para ver los numeros impares"));
let acumuladora = 0;


for (let index = 1; index <= num; index++) {
    acumuladora = acumuladora + 1;
    if (index%2!=0) {
        console.log("Numero impar", index );
    }
    
}
console.log("Estos son los numeros impares entre 1 y", num);