/*Cree un programa que pregunte al usuario si desea salir, 
si o no “S/N”, si el usuario teclea la letra S el
programa se detendrá, de lo contrario continuará ejecutándose.*/

let anuncio = prompt("Desea salir Si o No s/n")

while (anuncio.includes("n")) {
    anuncio = prompt("Desea salir Si o No s/n")
}