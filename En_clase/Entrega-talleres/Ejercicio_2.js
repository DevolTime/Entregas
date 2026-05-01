// Encontrar el número mayor

let num = [1,2,3,4,30,5,6,25]
let mayor = 0;

for (let i = 0; i < num.length; i++) {
    if (num[i] > mayor) {
        mayor = num[i]
    }
}

console.log(mayor)