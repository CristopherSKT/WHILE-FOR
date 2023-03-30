/*Cree un programa que muestre el promedio de n números, dejándose
 de solicitar números cuando se introduzca el cero.*/

 let cantidad_n = parseFloat(prompt("Ingrese la cantidad de números a sacar el promedio"))
 let numeros;
 let contador = 0;
 let acumuladora = 0;
 let promedio = 0;
 
 while (contador < cantidad_n) {
   numeros = parseFloat(prompt("Ingrese un número (ingrese 0 para detener): "))
   if (numeros == 0) {
     break;
   }
   acumuladora += numeros;
   contador++;
 }
 
 if (contador > 0) {
   promedio = acumuladora / contador;
 }
 
 console.log("El promedio de los", contador, "números es:", promedio);

