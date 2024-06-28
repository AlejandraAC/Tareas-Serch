/* Exercise #2 (sugerencia map())
Write a function that:
Takes in an array of numbers.
Doubles the value of each number in the array.
Prints out the new updated array.
Example: Given an array [1, 2, 4, 5]. The output should be [2, 4, 8, 10]
 */
console.log("Ejercicio 2: Función que toma un arreglo de números e imprime otro con el doble de su valor")

const arr2 = [1, 2, 4, 5];
console.log(`Arreglo original: [${arr2}]`)

/* Opción 1 */
console.log("Opción 1: Con ciclo for")
const doblarValor = (array) => {
    let arrayDoble = [];
    for ( i = 0; i < array.length; i++){
        arrayDoble.push( array[i]*2 );
    } return arrayDoble
}
console.log(`Arreglo al Doble [${doblarValor(arr2)}]`);

/* Opción map */
console.log("Opción 2: Con método map")
const doblarValor2 = (arr) => {return arr.map(currentValue => currentValue * 2)};
console.log(`Arreglo al Doble [${doblarValor(arr2)}]`);

// Añade la función al objeto window para hacerla accesible globalmente
window.doblarValor2 = doblarValor2(arr2);