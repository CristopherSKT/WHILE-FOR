let multiplo = 0;
let contador = 0;
while (multiplo <=100) {
    if (multiplo%6==0) {
        contador = contador+1
    }
    multiplo = multiplo+1
}
console.log("del 0 al 100 hay",contador,"multiplos");