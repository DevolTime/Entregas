class Persona {
    nombre;
    edad;
    genero;

    constructor(nombre, edad, genero) {
        this.nombre = nombre;
        this.edad = edad;
        this.genero = genero;
    }
}

const personas = [];

for (let i = 0; i < 5; i++) {
    let nombre = prompt('ingresa tu nombre');
    let edad = Number(prompt('ingresa tu edad'));
    let genero = prompt('ingresa tu genero');

    let persona = new Persona(nombre, edad, genero);
    personas.push(persona)
}

console.log(personas);

let cantMujer = 0;
let cantHombre = 0;

for (let i = 0; i < 5; i++) {
    if (personas[i].genero == 'f'){
        cantMujer = cantMujer + 1
    } if (personas[i].genero == 'm'){
        cantHombre = cantHombre + 1
    }
}

console.log(cantHombre, cantMujer)