import { popularity } from "./popularity.js";
const API = "https://fakeapi.net/products?limit=20";


async function getProducts() {
    try {
        const response = await fetch(API);
        const data = await response.json();

        const total = calculateTotal(data.data);
        console.log(total);

        const calf = popularity(data.data);
        console.log(calf);

    } catch (error) {
        console.error("Error al conectarse con la fuente")
    }
}

getProducts();


const calculateTotal = (products) => {
    const resultado = [];


    for (let i = 0; i < products.length; i++) {
        resultado.push({
            Producto: products[i].id,
            Nombre: products[i].title,
            stock: products[i].stock,
            price: products[i].price,
            total: products[i].price * products[i].stock
        });
    }
    return resultado;
};

export { getProducts };