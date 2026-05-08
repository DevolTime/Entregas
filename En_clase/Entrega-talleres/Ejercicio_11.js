// Calcular área y perímetro de un rectángulo

let Base = 80;
let Altura = 20;
let areas = [];
let perimetro = [];

function Area(Base, Altura) {
    let area = Base * Altura
    areas.push(area)

    let peri = (Base + Altura) * 2
    perimetro.push(peri)
}

Area(Base, Altura);

console.log("Area: " + areas + ", Perimetro: " + perimetro)