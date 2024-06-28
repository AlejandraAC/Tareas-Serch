/* Exercise #4 (sugerencia filter() e includes() )
let student1Courses = ['Math', 'English', 'Programming'];
let student2Courses = ['Geography', 'Spanish', 'Programming'];
Create a program that loops over the 2 arrays; if there are any common courses print them out to the console. */

console.log("Ejercicio 4: Recorre 2 arreglos; si hay elementos en común, imprimirlos en consola");

const student1Courses = ['Math', 'English', 'Programming', 'Informática', 'Música'];
console.log(`Arreglo 1: [${student1Courses}]`);
const student2Courses = ['Geography', 'Spanish', 'Programming', 'Informática'];
console.log(`Arreglo 2: [${student2Courses}]`);

console.log("Opción 1: Con ciclo for");
const commonCourses = []; 
for (let course1 of student1Courses ){
    for ( let course2 of student2Courses ){
        if( course1 === course2) commonCourses.push( course1 );
    } 
}
console.log("Los elementos en común son: " +  commonCourses.join(","));

console.log("Opción 2: Con métodos filter e include")
// ======resolviendo con filter() e include()
const commonCourse2 = student1Courses.filter( course1 => student2Courses.includes(course1) );
console.log(`Los elementos en común son: ${commonCourse2}`)


// Añade la función al objeto window para hacerla accesible globalmente
window.commonCourse2 = commonCourse2;
