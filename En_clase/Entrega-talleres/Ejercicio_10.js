// Contar propiedades de un objeto:

let cosas = {
    A: "Celular",
    B: "Portatil",
    C: "Escritorio",
    D: "Monitor"
};

function contar (cosas){
    let contador = 0;

    for (contar in cosas){
        contador++;
    }
    return contador;
}

let resultado = contar(cosas);

console.log(cosas, "-" ,resultado)