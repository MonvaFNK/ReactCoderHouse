import { addDoc, collection, doc, getDoc, getDocs, getFirestore, query, where } from "firebase/firestore";




export const getAllProducts = () => {
const database = getFirestore();
const collectionReference = collection(database, 'items');
return getDocs(collectionReference)
    .then(snapshot => {
    const list = snapshot
        .docs
        .map((doc) => ({
        id: doc.id,
        ...doc.data()
        }));
    return list;
    })
    .catch(error => console.warn(error))
};

export const getProduct = (id) => {
const database = getFirestore();
const itemReference = doc(database, 'items', id);
return getDoc(itemReference)
    .then(snapshot => {
    if(snapshot.exists()) {
        const item = {
        id: snapshot.id,
        ...snapshot.data()
        };
        return item;
    }
    })
};

export const getProductsByCategory = (categoryId) => {
const database = getFirestore();
const collectionReference = collection(database, 'items');
const collectionQuery = query(collectionReference, where('category', '==', categoryId))
return getDocs(collectionQuery)
    .then(snapshot => {
    if (snapshot.size === 0)
        return [];
    
    const list = snapshot
        .docs
        .map((doc) => ({
        id: doc.id,
        ...doc.data()
        }));
    return list;
    })
    .catch(error => console.warn(error))
};

const products = [
    {id:1,category: 'Miscelaneo', title: 'taza', price: 100, pictureUrl: 'https://i.imgur.com/tXpKOAQ.jpg',stock: 'number',description: "Taza estampada con logo de la banda",},
    {id:2,category: 'Miscelaneo', title: 'bandera', price: 100, pictureUrl: 'https://i.imgur.com/PYaFPMP.jpg',stock: 'number',description: "Bandera mediana de la banda",},
    {id:3,category: 'Miscelaneo', title: 'disco', price: 100, pictureUrl: 'https://i.imgur.com/pZhXUev.jpg',stock: 'number',description: "Nuevo disco de la banda",},
    {id:4,category: 'Indumentaria', title: 'buzo', price: 100, pictureUrl: 'https://i.imgur.com/Z3Y3vkc.jpg',stock: 'number',description: "Buzo de lana",},
    {id:5,category: 'Indumentaria', title: 'mochila', price: 100, pictureUrl: 'https://i.imgur.com/vEFs0eU.jpg',stock: 'number',description: "Mochila de estilo",},
    {id:6,category: 'Indumentaria', title: 'remera', price: 100, pictureUrl: 'https://i.imgur.com/AfLSiY8.jpg',stock: 'number',description: "Remera de tela", },
]

/* export const getAllProducts = () => {
    const promise = new Promise ((resolve) =>{
        setTimeout(() => {
            return resolve(products);
        }, 2000)
    });
    return promise;
}; */

export const createAllProducts = async () => {
    try {

    const database = getFirestore(); 

    const collectionReference = collection(database, 'items');
    for(let i = 0; i < products.length; i++) {
        const snapshot = await addDoc(collectionReference, products[i]);
    }
    } catch (error) {
    console.warn(error)
    }
}