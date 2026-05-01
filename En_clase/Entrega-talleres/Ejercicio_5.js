// Buscar un elemento

let num = ['red', 'yellow', 'blue', 'green', 'gold', 'silver']
let buscar = 'dark';

let numero = false

for (let i = 0; i < num.length; i++) {
    if (buscar === num[i]) {
        numero = true;
    }
}

console.log(numero)