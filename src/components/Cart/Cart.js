const Cart = () => {
    
    const handleOpenCart = () => {
        let item = document.querySelector('.cart__container');
        item.style.display = 'none';
    }
    const checkout = () =>{
        let comprar = document.querySelector('.container')
        comprar.style.display = 'flex'
    }
    return (
    <div className="cart__container" id="cart__container">
        <h2>Carrito</h2>
        <div className="cart__container--contenido"></div>
        <button onClick={handleOpenCart} className="cart__container--close">
            X
        </button>
        <button onClick={checkout} className="cart__container--buy">
            Comprar
        </button>
            <p className="cart__container--total">0</p>
    </div>
    );
}

export default Cart;