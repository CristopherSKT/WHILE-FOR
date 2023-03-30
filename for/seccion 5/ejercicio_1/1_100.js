/* 1. Cree un programa que imprima los números enteros entre 0 y 100 en orden 
ascendente y descendente. Use ciclo for*/

let acumuladora = 0;

for (let index = 0; index <= 99; index++) {
    acumuladora = acumuladora + 1
    console.log(acumuladora);
}

let acumuladora2 = 0;

for (let index = 99 - 1; index >= 0; index--) {
    acumuladora2 = 0;
    for (let n = 0; n <= index; n++) {
        acumuladora2 = acumuladora2 + 1
    }
    console.log(acumuladora2);
}