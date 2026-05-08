// Agregar propiedad a objetos

const personas = [
    {
        nombre: "Julián",
        apellido: "Casas",
        hobby: "Fotografía de paisajes",
        edad: 28,
    },
    {
        nombre: "Elena",
        apellido: "Rivas",
        hobby: "Cultivo de bonsáis",
        edad: 42,
    },
    {
        nombre: "Marcos",
        apellido: "Torres",
        hobby: "Restauración de muebles",
        edad: 35,
    },
    {
        nombre: "Sofía",
        apellido: "Méndez",
        hobby: "Escalada en roca",
        edad: 24,
    },
    {
        nombre: "Adrián",
        apellido: "López",
        hobby: "Composición digital",
        edad: 31,
    }
];


let pets = "Dog";

for (let i = 0; i < personas.length; i++) {
    personas[i].pets = pets;
}

console.log(personas);