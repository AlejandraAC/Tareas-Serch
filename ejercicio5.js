/* Exercise #5
For each of the exercises below, assume you are starting with the following people array.
let people = ["Maria", "Dani", "Luis", "Juan", "Camila"];
Write a command that prints out all of the people in the list.
Write the command to remove "Dani" from the array.
Write the command to remove "Juan" from the array.
Write the command to move "Luis" to the front of the array.
Write the command to add your name to the end of the array.
Using a loop, iterate through this array and after console.log "Maria", exit from the loop.
Write the command that gives the indexOf where "Maria" is located.
At the end of the exercise, there should be 4 people in the array.
 */

console.log("Ejercicio 5: Por cada ejercicio utilizar el arreglo 'people'");
const people = ["Maria", "Dani", "Luis", "Juan", "Camila"];

console.log("I: Imprimir el arreglo 'people' en forma de lista:")
/* Write a command that prints out all of the people in the list. */
const printPeople = (array) => {
    for ( let names of array ){
        console.log( names)
    }
}
printPeople(people);

/* Write the command to remove "Dani" from the array. */
console.log("II: Borra el elemento 'Dani' del arreglo:")
/* splice= Eliminar un único elemento mediante su posición */
/* .splice(pos, 1) empieza en la posición que nos indica el valor de la variable pos y elimina 1 elemento. */
const removeDani = people.splice(people.indexOf("Dani"),1); /* Elemento eliminado [Dani]*/

/* Nuevo array sin Dani*/
console.log(people); // ['Maria', 'Luis', 'Juan', 'Camila']

/* Write the command to remove "Juan" from the array. */
console.log("III: Borra el elemento 'Juan' del arreglo:")
const removeJuan = people.splice(people.indexOf("Juan"),1); /* Elemento eliminado [Juan]*/

/* Nuevo array sin Juan*/
console.log(people); // ['Maria', 'Luis', 'Camila']

/* Write the command to move "Luis" to the front of the array. */
console.log("IV: Mueve el elemento 'Luis' al principio del arreglo:");
/* Eliminar a Luis */
const removeLuis = people.splice(people.indexOf("Luis"),1); /* Elemento eliminado [Luis]*/
/* Convierte el arreglo [Luis] a cadena "Luis" y lo añade al principio del arreglo */
people.unshift(removeLuis.toString()); 
console.log(people);

/* Write the command to add your name to the end of the array. */
console.log("V: Añade tu nombre al final del arreglo:");
const miNombre = people.push("Alejandra");
console.log(people);

/* Using a loop, iterate through this array and after console.log "Maria", exit from the loop. */
console.log("VI: Usando un ciclo, itera el arreglo y después de imprimir 'Maria', sal de él");
const printPeople2 = (array) => {
    for (let i = 0; i < array.length; i++) {
        const element = array[i];
        console.log(array[i])
        if (element === "Maria") 
            break
    }   
}
printPeople2(people);

/* Write the command that gives the indexOf where "Maria" is located. */
console.log("VII: Escribe el índice donde se encuentra 'Maria'");
const locationMaria = people.indexOf("Maria");
console.log(locationMaria);

console.log("VIII: Al final de este ejercicio, debería haber 4 elemento del arreglo:");
/* At the end of the exercise, there should be 4 people in the array. */
console.log(people);

// Añade la función al objeto window para hacerla accesible globalmente
window.people = people;
