import {AiOutlineShoppingCart} from 'react-icons/ai';

const CartWidget = () => {

    const handleOpenCart = () => {
        let item = document.querySelector('.cart__container');
        item.style.display = 'flex';
    }

return (
    <div onClick={handleOpenCart} >
        <AiOutlineShoppingCart className='cartWidget' />
    </div>
);
}

export default CartWidget;