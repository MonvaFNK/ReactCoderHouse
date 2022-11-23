import { AiOutlineShoppingCart } from 'react-icons/ai';
import CartContext from './../../context/CartContext';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Badge } from 'react-bootstrap';

const CartWidget = () => {

    const { totalQuantity } = useContext(CartContext);
    return (
        <div className='cartWidgetContainer'>
            <Link to={'/checkout'}>
                <AiOutlineShoppingCart className='cartWidget' />
            </Link>
            {totalQuantity > 0 && (
                <Badge className='alertWidget' pill bg="danger">{totalQuantity}</Badge>
            )}
        </div>
    );
}

export default CartWidget;