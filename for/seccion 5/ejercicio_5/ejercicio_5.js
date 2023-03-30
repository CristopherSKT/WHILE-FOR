/*Cree un programa que calcula la suma de los primeros n números naturales. 
Use ciclo for*/

let naturales = parseFloat(prompt("Ingrese el número hasta donde se van a sumar"));
let acumuladora = 0;

for (let index = 0; index <= naturales; index++) {
    acumuladora = acumuladora + index;
    console.log(acumuladora);
    
}
console.log("El resultado de la suma de los  primeros",naturales,"números es:",acumuladora);