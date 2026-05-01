// Calcular promedio de notas:

const estudiantes = [
    {
        nombre: "Juan",
        apellido: "Pérez",
        notas: [4.5, 3.8, 4.2, 5.0]
    },
    {
        nombre: "María",
        apellido: "Gómez",
        notas: [3.0, 3.5, 4.0, 2.8]
    },
    {
        nombre: "Carlos",
        apellido: "Rodríguez",
        notas: [4.9, 4.7, 5.0, 4.8]
    },
    {
        nombre: "Ana",
        apellido: "Martínez",
        notas: [2.5, 3.0, 3.2, 2.9]
    },
    {
        nombre: "Luis",
        apellido: "Hernández",
        notas: [4.0, 4.1, 3.9, 4.3]
    },
    {
        nombre: "Sofía",
        apellido: "López",
        notas: [5.0, 4.8, 4.9, 5.0]
    },
    {
        nombre: "Diego",
        apellido: "Torres",
        notas: [3.2, 3.6, 3.8, 3.5]
    },
    {
        nombre: "Valentina",
        apellido: "Ramírez",
        notas: [4.6, 4.4, 4.7, 4.5]
    },
    {
        nombre: "Andrés",
        apellido: "Castro",
        notas: [2.9, 3.1, 3.0, 2.8]
    },
    {
        nombre: "Camila",
        apellido: "Morales",
        notas: [4.3, 4.5, 4.2, 4.4]
    }
];

let promedios = [];

for (let i = 0; i < estudiantes.length; i++) {
    let notas = estudiantes[i].notas;
    let nombre = estudiantes[i].nombre;
    let apellido = estudiantes[i].apellido;

    let suma = 0;

    for (let j = 0; j < notas.length; j++) {
        suma += notas[j];
    }

    let promedio = suma / notas.length;

    promedios.push({
        nombre: nombre + " " + apellido,
        promedio: promedio.toFixed(1)
    });
}

console.log(promedios);