const products = [
    {id:1,category: 'Miscelaneo', title: 'taza', price: 100, pictureUrl: 'https://i.imgur.com/tXpKOAQ.jpg',stock: 'number',description: "Taza estampada con logo de la banda"},
    {id:2,category: 'Miscelaneo', title: 'bandera', price: 100, pictureUrl: 'https://i.imgur.com/PYaFPMP.jpg',stock: 'number',description: "Bandera mediana de la banda"},
    {id:3,category: 'Miscelaneo', title: 'disco', price: 100, pictureUrl: 'https://i.imgur.com/pZhXUev.jpg',stock: 'number',description: "Nuevo disco de la banda"},
    {id:4,category: 'Indumentaria', title: 'buzo', price: 100, pictureUrl: 'https://i.imgur.com/Z3Y3vkc.jpg',stock: 'number',description: "Buzo de lana"},
    {id:5,category: 'Indumentaria', title: 'mochila', price: 100, pictureUrl: 'https://i.imgur.com/vEFs0eU.jpg',stock: 'number',description: "Mochila de estilo"},
    {id:6,category: 'Indumentaria', title: 'remera', price: 100, pictureUrl: 'https://i.imgur.com/AfLSiY8.jpg',stock: 'number',description: "Remera de tela"},
]

export const getAllProducts = () => {
    const promise = new Promise ((resolve) =>{
        setTimeout(() => {
            return resolve(products);
        }, 2000)
    });
    return promise;
};

export const getProduct = (id) => {
    const promise = new Promise ((resolve) =>{
    const result = products.find((product)=> product.id === parseInt(id));
    setTimeout(() => {
        return resolve(result);
        }, 2000)
    });
    return promise;
};

export const getProductsByCategory = (categoryId) => {
    const promise = new Promise((resolve) => {
    const results = products.filter((product) => product.category === categoryId);
    setTimeout(() => {
        return resolve(results);
        }, 2000)
    })
    return promise
};