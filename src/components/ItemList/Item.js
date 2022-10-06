import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

const Item = ({product}) => {
    return (
        <Card style={{width: '12rem'}}>
            <Card.Img variant="top" src={product.pictureUrl} width="120rem" height="120rem"/>
            <Card.Body>
                <Card.Title>{product.title}</Card.Title>
                <Card.Text>
                    {product.price} $
                </Card.Text>
                <Card.Text>
                {product.description}
                </Card.Text>
                <Link  to={`/item/${product.id}`}>
                    <Button variant="primary">
                            Ver detalle 
                    </Button>
                </Link>
            </Card.Body>
        </Card>
    )
}

export default Item;