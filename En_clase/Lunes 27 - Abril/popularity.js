import { getProducts } from "./fake-api.js";

const Products = getProducts();

const popularity = (products) => {
    const calificacion = [];

    for (let i = 0; i < products.length; i++) {
        if (products[i].rating.count >= 100 && products[i].rating.rate >= 4.7) {
            calificacion.push({
                id: products[i].id,
                title: products[i].title,
                rate: products[i].rating.rate,
                count: products[i].rating.count
            });
        }
    }
    return calificacion;
}

export { popularity };