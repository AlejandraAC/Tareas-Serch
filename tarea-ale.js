console.log("Ejercicios-Entrevista");

// ==========Pregunta de Entrevista==========
/*
Dado el sigiuente texto: "Ya vámonos"
Mostrar la frase al revés: "sonomáv aY"
*/
const phrase2 = "Ya vámonos";
let reversePhrase = "";
for ( i = phrase2.length - 1 ; i >= 0 ; i-- ){
    reversePhrase = reversePhrase + phrase2.charAt(i);
}
console.log( reversePhrase );

console.log( phrase2.split("").reverse().join("") );
//reverse actual sobre el arreglo, split convirtió una cadena
//a un arreglo, y con join convierte de un arreglo a un string