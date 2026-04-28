const API = "https://fakeapi.net/products/category/electronics";


async function getProducts() {
    try {
        const response = await fetch(API);
        const data = await response.json();
        

        let total = 0;
        for (const product of data.data) {
            total += product.price;
        }

        console.log("Total: " + total);


    } catch (error) {
        console.error("Error al conectarse con la fuente")
    }
}


getProducts();