// Combinar dos objetos

const obj1 = { a: 1 };
const obj2 = { b: 2 };

function combinarO(obj1, obj2) {

    const combinado = {
        ...obj1,
        ...obj2
    };

    return combinado;
}

console.log(combinarO(obj1, obj2));