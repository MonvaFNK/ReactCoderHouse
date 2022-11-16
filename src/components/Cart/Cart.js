import {BrowserRouter as Router,Link} from 'react-router-dom';

const Cart = () => {
    
    const handleOpenCart = () => {
        let item = document.querySelector('.cart__container');
        item.style.display = 'none';
    }
    const checkout = () =>{
        let comprar = document.querySelector('.container');
        comprar.style.display = 'flex';
    }
    const clear = () => {
        let limpiar = document.querySelector('.cart__container--contenido');
        limpiar.innerHTML = '';
        let valor = document.querySelector('.cart__container--total');
        valor.innerHTML = '0'
    }
    return (
    <div className="cart__container" id="cart__container">
        <h2>Carrito</h2>
        <div className="cart__container--contenido">

        </div>
        <button onClick={handleOpenCart} className="cart__container--close">
            X
        </button>
        <button onClick={checkout} className="cart__container--buy">
            Comprar
        </button>
        <Link to='/' >
        <button onClick={clear} className="cart__container--clear">
            Limpiar carrito
        </button>
        </Link>
        <div className="cart__container--price">
            <p>Valor total: </p>
            <p className="cart__container--total">0</p>
            <p> $</p>
        </div>
    </div>
    );
}

export default Cart;