/* OPTIONAL: Exercise # 6
Write a function that performs the bubble algorithm.
Input [3, 6, 12, 5, 100, 1]
Output [1, 3, 5, 6, 12, 100]
 */

// Función de ordenamiento burbuja (Bubble Sort)
// El algoritmo Bubble Sort es un algoritmo de ordenamiento simple que funciona 
// comparando repetidamente pares de elementos adyacentes y haciendo intercambios 
// si están en el orden incorrecto. Cada pasada a través de la lista coloca el 
// próximo elemento más grande en su posición correcta.

console.log("Ejercicio 6: Escribe una función con el algoritmo de ordenamiento de burbuja")
function bubbleSort(arr) {
    const n = arr.length; // Longitud del array
    
    // Bucle externo para iterar sobre cada elemento del array
    for (let i = 0; i < n - 1; i++) {
      // Los últimos i elementos ya están en su lugar correcto
      // Bucle interno para comparar y hacer intercambios
      for (let j = 0; j < n - i - 1; j++) {
        // Intercambiar si el elemento actual es mayor que el siguiente elemento
        if (arr[j] > arr[j + 1]) {
          // Intercambiar arr[j] y arr[j + 1]
          let temp = arr[j];   // Guardar el valor actual en una variable temporal
          arr[j] = arr[j + 1]; // Asignar el siguiente elemento al lugar actual
          arr[j + 1] = temp;   // Asignar el valor guardado (temporal) al siguiente elemento
        }
      }
    }
    
    return arr; // Devolver el array ordenado
  }
  
  // Ejemplo de uso:
  const inputArray = [3, 6, 12, 5, 100, 1];
  console.log(`Arreglo desordenado: [${inputArray}]`)
  const sortedArray = bubbleSort(inputArray);
  console.log(`Arreglo ordenado: [${sortedArray}]`); // Salida: [1, 3, 5, 6, 12, 100]

  
// Añade la función al objeto window para hacerla accesible globalmente
window.sortedArray = sortedArray;
  