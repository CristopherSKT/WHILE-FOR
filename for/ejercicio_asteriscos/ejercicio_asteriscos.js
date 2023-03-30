let inicio_asteriscos = 1;
let num_asteriscos = parseInt(prompt("Cuantos asteriscos va a tener la piramide?"))
let asteriscos = "*"
let acumuladora = "";

for (let index = inicio_asteriscos; index <= num_asteriscos; index++){
    acumuladora = acumuladora + asteriscos
    console.log(acumuladora);
}

let asterisco2 = "*"
let acumuladora2 = "";

for(let index = num_asteriscos-1; index >= inicio_asteriscos; index--){
    acumuladora2 = "";
    for (let n = 1; n <= index; n++) {
        acumuladora2 = acumuladora2+asterisco2
        
    }
    console.log(acumuladora2);
}