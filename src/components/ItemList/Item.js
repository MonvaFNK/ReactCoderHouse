import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

const Item = ({product}) => {
    const agregarCarrito = () => {
        let item = document.querySelector('.cart__container--contenido');
        let test = document.querySelector(`.${product.id}__price`)
        
        if(test == null){
            let total = document.querySelector('.cart__container--total');
            let valor = total.innerHTML
            total.innerHTML = parseInt(valor)+parseInt(product.price)
            item.innerHTML+=  `<div class="${product.id}"> <p>${product.title}</p> <div class="${product.id}__price">${product.price} </div> </div>`;
        }
        else{
            let precio = document.querySelector(`.${product.id}__price`);
            precio = precio.innerHTML
            test.innerHTML = parseInt(precio)+parseInt(product.price)
            let total = document.querySelector('.cart__container--total');
            let valor = total.innerHTML
            total.innerHTML = "Valor:"+parseInt(valor)+parseInt(product.price)+"$";

        }

    }
    return (
        <Card style={{width: '12rem'}}>
            <Card.Img variant="top" src={product.pictureUrl} width="140rem" height="150rem"/>
            <Card.Body>
                <Card.Title>{product.title}</Card.Title>
                <Card.Text>
                    {product.price} $
                </Card.Text>
                <Card.Text>
                {product.description}
                </Card.Text>
                <Link  to={`/item/${product.id}`}>
                    <Button variant="primary" className='buttondetail'>
                            Ver detalles 
                    </Button>
                </Link>
                <Button variant="primary" onClick={agregarCarrito} className='buttoncart'>
                            Añadir al carrito 
                </Button>
            </Card.Body>
        </Card>
    )
}

export default Item;