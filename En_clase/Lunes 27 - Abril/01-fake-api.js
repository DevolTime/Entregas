const API = "https://fakeapi.net/products/category/electronics";


async function getProducts() {
    try {
    const response = await fetch (API);
    const data = await response.json();
    console.log(data)
    }  catch (error){
        console.error("Error al conectarse con la fuente")
    }
}

getProducts();