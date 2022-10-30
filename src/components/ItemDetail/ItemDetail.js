import { useState } from "react";
import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


const ItemDetail = ({product}) => {


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
            <Link  to={`/`}>
                <Button variant="primary" className='buttondetail'>
                        Volver al catalogo
                </Button>
            </Link>
        </Card.Body>
    </Card>
    );
}

export default ItemDetail;