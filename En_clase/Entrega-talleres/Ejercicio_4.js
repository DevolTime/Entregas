// Invertir un array

let num = [1, 2, 3, 4, 5, 6]
let invertir = [];

for (let i = 0; i < num.length; i++) {
        invertir.unshift(num[i])
}

console.log(invertir)