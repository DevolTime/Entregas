const API = "https://fakeapi.net/products/category/electronics";


async function getProducts() {
    try {
        const response = await fetch(API);
        const data = await response.json();
        console.log(data)
    } catch (error) {
        console.error("Error al conectarse con la fuente")
    }
}


function total(price) {
    let total = 0;
    
    for (let i = 0; i < price.length; i++){
        total+= price[i];
    }
    return total
}

getProducts();