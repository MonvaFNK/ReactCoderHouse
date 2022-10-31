import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import { getProduct } from "../../utils/products";
import ItemDetail from "./ItemDetail";
import Button from 'react-bootstrap/Button';


const ItemDetailContainer = () => {
    let totalQuantity = 1;
    const agregarCarrito = () => {
        let item = document.querySelector('.cart__container--contenido');
        let test = document.querySelector(`.${product.id}__price`)
        let carrito = document.querySelector('.cart__container');
        carrito.style.display = 'flex';
        if (test == null) {
            let total = document.querySelector('.cart__container--total');
            let valor = total.innerHTML;
            let product__quantity = ` x ${totalQuantity++}`
            total.innerHTML = parseInt(valor) + parseInt(product.price);
            item.innerHTML += ` <div class="${product.id} product__incart"> ${product.title} 
                                    <div class="${product.id}__quantity spacer">${product__quantity}</div>
                                    <div class="${product.id}__price product__incart--price">${product.price} </div> $ 
                                </div>`;
            console.log(product__quantity);
        }
        else {
            let precio = document.querySelector(`.${product.id}__price`);
            precio = precio.innerHTML;
            test.innerHTML = parseInt(precio) + parseInt(product.price);
            let total = document.querySelector('.cart__container--total');
            let valor = total.innerHTML;
            total.innerHTML = (parseInt(valor) + parseInt(product.price));
            let product__quantity = `${totalQuantity++}`;
            document.querySelector(`.${product.id}__quantity`).innerHTML = ` x ${product__quantity}`;
            console.log(product__quantity);
        }
    }
    const [product, setProduct] = useState()
    const { id } = useParams();

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
            <Button variant="success" onClick={agregarCarrito} className='buttoncart'>
                Añadir al carrito
            </Button>
        </div>

    );
}

export default ItemDetailContainer;