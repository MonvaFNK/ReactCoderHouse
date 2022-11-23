import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import { getProduct } from "../../utils/products";
import ItemDetail from "./ItemDetail";
import { useContext } from "react";
import CartContext from "../../context/CartContext";


const ItemDetailContainer = () => {
    const [product, setProduct] = useState()
    const { id } = useParams();

    const { addItem } = useContext(CartContext);
    const [count, setCount] = useState(0);
    const [showItemCount, setShowItemCount] = useState(true);

    useEffect(() => {
        getProduct(id)
            .then((data) => {
                setProduct(data)
            })
            .catch(error => console.warn(error))
        }, [id])



    return (
        <div className="producto">
            <h1>Detalle del Producto</h1>
            {product && <ItemDetail product={product} />}
        </div>
    );
}

export default ItemDetailContainer;