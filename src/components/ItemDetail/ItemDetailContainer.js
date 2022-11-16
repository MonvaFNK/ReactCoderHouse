import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import { getProduct } from "../../utils/products";
import ItemDetail from "./ItemDetail";
import Button from 'react-bootstrap/Button';


const ItemDetailContainer = () => {
    const [product, setProduct] = useState()
    const { id } = useParams();

    useEffect(() => {
        getProduct(id)
            .then((data) => {
                setProduct(data)
            })
            .catch(error => console.warn(error))
        }, [id])



    let totalQuantity = 0;

    const agregarCarrito = () => {
        let item = document.querySelector('.cart__container--contenido');
        let test = document.querySelector(`.${product.id}__price`);
        let carrito = document.querySelector('.cart__container');
        carrito.style.display = 'flex';
        if ( totalQuantity < product.stock){
            if (test == null) {
                totalQuantity++;
                let total = document.querySelector('.cart__container--total');
                let valor = total.innerHTML;
                let product__quantity = `${totalQuantity}`;
                total.innerHTML = parseInt(valor) + parseInt(product.price);
                item.innerHTML += ` <div class="${product.id} product__incart"> ${product.title}
                                        <div class="text spacer">x</div>
                                        <div class="${product.id}__quantity spacer">${product__quantity}</div>
                                        <div class="${product.id}__price product__incart--price">${product.price} </div> $ 
                                    </div>`;
            }
            else if (totalQuantity < product.stock) {
                let precio = document.querySelector(`.${product.id}__price`);
                precio = precio.innerHTML;
                test.innerHTML = parseInt(precio) + parseInt(product.price);
                let total = document.querySelector('.cart__container--total');
                let valor = total.innerHTML;
                total.innerHTML = (parseInt(valor) + parseInt(product.price));
                totalQuantity++;
                let product__quantity = `${totalQuantity}`;
                document.querySelector(`.${product.id}__quantity`).innerHTML = `${product__quantity}`;
            }
        }else{
        alert("No hay mas stock")
        }

    }


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