// Filtrar estudiantes aprobados

import { estudiantes, promedios } from "./Ejercicio_6.js";

let aprobados = [];
let reprobados = [];

for (let i = 0; i < estudiantes.length; i++) {
    let promedio = parseFloat(promedios[i].promedio);
    if (promedio < 3.0) {
        reprobados.push(promedios[i]);
    } else {
        aprobados.push(promedios[i]);
    }
}

console.log("Aprobados: ", aprobados);
console.log("Reprobados: ", reprobados);

export { aprobados, reprobados };