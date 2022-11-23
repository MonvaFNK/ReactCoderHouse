import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import CartContext from "../../context/CartContext";
import { useContext, useState } from "react";
import ItemCount from "./ItemCount";
import Item from "../ItemList/Item"

const ItemDetail = ({ product }) => {
    const { addItem } = useContext(CartContext);
    const [count, setCount] = useState(0);
    const [showItemCount, setShowItemCount] = useState(true);

    const handleAdd = (value) => {
        setCount(value);
        setShowItemCount(false);
        addItem(product, value);
    };

    return (
        <div className='itemDetailContainer'>
            <Item product={product} />
            {showItemCount && (<ItemCount
                initial={1}
                stock={10}
                onAdd={handleAdd}
            />)}
            {!showItemCount && (
                <Link to='/checkout'>
                    <Button variant="success">
                        Ir al Carrito
                    </Button>
                </Link>
            )}
        </div>
    );
}

export default ItemDetail;