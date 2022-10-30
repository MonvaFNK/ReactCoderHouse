import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

const Item = ({product}) => {


    return (
        <Card style={{width: '12rem'}}>
            <Card.Img variant="top" src={product.pictureUrl} width="140rem" height="150rem"/>
            <Card.Body>
                <Card.Title>{product.title}</Card.Title>
                <Card.Text>
                    {product.price} $
                </Card.Text>
                <Link  to={`/item/${product.id}`}>
                    <Button variant="primary" className='buttondetail'>
                            Ver detalles 
                    </Button>
                </Link>
            </Card.Body>
        </Card>
    )
}

export default Item;