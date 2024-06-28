/*
<!-- Exercise #1 (sugerencia: join())
Copy the code below into your workspace:
let arr = ["This", "is", "a", "sentence."];
function printOutString() {
  // your code here
}
printOutString();
Complete the function to print out the string: This is a sentence.
 -->
*/

console.log("Ejercicio 1: Completar la función para imprimir: This is a sentence");

console.log("Opción 1: Ciclo for");
const arr = ["This", "is", "a", "sentence."];
/* Opción 1 */
function printOutString() {
  let cadena = "";
  for(let i = 0; i < arr.length; i++){
    cadena = cadena + arr[i] + " ";
  }
  return cadena.trim();
}
console.log(printOutString());


console.log("Opción 2: Join");
/* Opcion con join */
function printOutString2() {
    return arr.join(" ");
  }
console.log(printOutString2()); 

// Añade la función al objeto window para hacerla accesible globalmente
window.printOutString2 = printOutString2;