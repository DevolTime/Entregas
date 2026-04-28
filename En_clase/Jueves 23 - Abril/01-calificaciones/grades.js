import { estudiantes } from "./students.js";

// Calcular el promedio
export function calcularPromedio(notas) {
    let suma = 0;

    for (let i = 0; i < notas.length; i++) {
        suma += notas[i];
    }
    return suma / notas.length;
}

for (let i = 0; i < estudiantes.length; i++) {
    const promedio = calcularPromedio(estudiantes[i].notas);
    // console.log('<---------UwU--------->');
}


// Obtener el estado
export function obtenerEstado(promedio) {
    if (promedio >= 3.0) {
        return "Aprobado";
    } else {
        return "Reprobado";
    }
}

// for (let i = 0; i < estudiantes.length; i++) {
//     const promedio = calcularPromedio(estudiantes[i].notas);
//     const estado = obtenerEstado(promedio);
// }



// Encontrar mejor estudiante
export function mejorstudy(estudiantes) {
    let mejorPromedio = 0;
    let mejorEstudiante = null;

    for (let i = 0; i < estudiantes.length; i++) {
        const promedio = calcularPromedio(estudiantes[i].notas);
        if (promedio > mejorPromedio) {
            mejorPromedio = promedio;
            mejorEstudiante = estudiantes[i];
        }
    }
    return mejorEstudiante;
}

const mejor = mejorstudy(estudiantes);


for (let i = 0; i < estudiantes.length; i++) {
    const promedio = calcularPromedio(estudiantes[i].notas);
    const estado = obtenerEstado(promedio);
    
    console.log(`🔸${estudiantes[i].nombre} ${estudiantes[i].apellido}: ${promedio.toFixed(1)} | ${estado}`);
}
console.log(`\n 🏆 Mejor estudiante: ${mejor.nombre} ${mejor.apellido}`);