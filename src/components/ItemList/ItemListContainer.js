import { useState } from "react";
import { useEffect } from "react";
import {useParams} from 'react-router-dom';
import ItemList from './ItemList';
import { getAllProducts, getProductsByCategory } from '../../utils/products';



const ItemListContainer = ({greeting}) => {
    const {categoryId} = useParams();
    const [products, setProducts] = useState([]);

    useEffect(() => {
        if (categoryId) {
        getProductsByCategory(categoryId)
            .then((data) => setProducts(data))
            .catch((error) => console.warn(error))
        } else {
        getAllProducts()
            .then((data) => setProducts(data))
            .catch((error) => console.warn(error))
        }
    }, [categoryId])

    return(
        <div className="ItemListContainer">
            <h1 className="ItemListContainer__titulo"> Productos </h1>
            <h3 className="ItemListContainer__greeting">{greeting}</h3>
            <ItemList products={products}/>
        </div>
    )
}

export default ItemListContainer;