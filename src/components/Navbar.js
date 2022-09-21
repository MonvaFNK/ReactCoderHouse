import './Navbar.css';
import './CartWidget';
import './CartWidget.css';
import CartWidget from './CartWidget';

function Navbar() {
return (
    <header>
        <div className="navbar">
            <h1 className='navbar__titulo'> FNKee Store</h1>
            <div className='navbar__contenedor'>
                <ul className='navbar__contenedor--items'> 
                    <div className='navbar__contenedor--items1'><a href=''><li>FrontPage</li></a></div>
                    <div className='navbar__contenedor--items2'><a href=''><li>Catalogo</li></a></div>
                    <div className='navbar__contenedor--items3'><a href=''><li>Sobre nosotros</li></a></div>
                </ul>
            </div>
            <CartWidget />
        </div>
    </header>
);
}

export default Navbar;