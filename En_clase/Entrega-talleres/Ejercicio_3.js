// Encontrar el número mayor

let num = [1,2,3,4,8,9,10,5]
let pares = [];
let impares = [];

let sumimpar = 0;
let sumpar = 0;

for (let i = 0; i < num.length; i++) {
    
    if (num[i] % 2 === 0) {
        pares.push(num[i])

        sumpar += num[i];
    }else{
        impares.push(num[i])
        sumimpar += num[i];
    }
}
console.log("Numeros Pares: " + pares + 
    " | Total de pares: " + pares.length +
    " | Suma de pares: " + sumpar +
    
    "\nNumeros Impares: " + impares + 
    " |Total de impares: " + impares.length +
    " | Suma de impares: " + sumimpar);