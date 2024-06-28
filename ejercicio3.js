/* Exercise #3 (sugerencia reduce())
Write a program to compute the sum and product (multiplication) of an array of numbers. 
Print out the sum and the product.
Example: Given an array [1, 2, 3, 4] The sum is 10. The product is 24.
 */

console.log("Ejercicio 3: Suma y Producto de un arreglo de números")
const arr3 = [1, 2, 3, 4];
console.log(`Arreglo dado: [${arr3}]`);

/* Opción 1 */
console.log("Opción 1: Con ciclo for");
const sumProduct = (array) => {
    let sum = 0;
    let product = 1;
    for ( let i = 0; i < array.length; i++ ){
        sum = sum + array[i];
        product = product * array[i];
    }
    return [sum, product]
}
const result = sumProduct( arr3 );
console.log( result );

/* Opción reduce */
console.log("Opción 2: Con reduce");
const sumReduce = (array) => 
    array.reduce ( (sumatoria, currentValue) => sumatoria + currentValue, 0);
console.log( `La suma es: ${sumReduce(arr3)}`)

const productReduce = (array) => 
    array.reduce ( (producto, currentValue) => producto * currentValue, 1);
console.log( `El producto es: ${productReduce(arr3)}`)

// Exportar las funciones para que estén disponibles globalmente
// Exportar las funciones para que estén disponibles globalmente
window.sumProduct = sumProduct;
window.sumReduce = sumReduce;
window.productReduce = productReduce;

// Asignar la respuesta a la tarjeta en el HTML
document.getElementById('respuesta3').textContent = `Suma: ${result.sum}, Producto: ${result.product}`;