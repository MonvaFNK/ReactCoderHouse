import './Cart/CartWidget';
import CartWidget from './Cart/CartWidget';
import { Link } from 'react-router-dom';

function Navbar() {
return (
    <header>
        <div className="navbar">
            <h1 className='navbar__titulo'> FNKee Store</h1>
            <div className='navbar__contenedor'>
                <ul className='navbar__contenedor--items'> 
                    <Link as={Link} to='/category/FrontPage'><div className='navbar__contenedor--items1'><li>Home</li></div></Link>
                    <Link as={Link} to='/category/Indumentaria'><div className='navbar__contenedor--items2'><li>Indumentaria</li></div></Link>
                    <Link as={Link} to='/category/Miscelaneo'><div className='navbar__contenedor--items3'><li>Miscelaneo</li></div></Link>
                </ul>
            </div>
            <CartWidget/>
        </div>
    </header>
);
}

export default Navbar;