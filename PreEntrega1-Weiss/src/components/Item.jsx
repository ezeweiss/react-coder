import React from 'react'
import { Button, Card, CardGroup, Col, Container, Row} from 'react-bootstrap';
import { Link } from 'react-router-dom';


const Item = function ({ id,name, description, precio, picture }) {
    return (
  
<Row className="g-4">
{Array.from({ length: 4 }).map((_, idx) => (
  <Col>
    <Card>
      <Card.Img variant="top" src={picture} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>
          {description}
        </Card.Text>
        <Card.Subtitle>{precio}</Card.Subtitle>
        <Link to={`${id}`}><Button variant="warning">Ver detalle</Button></Link>
        <Button variant="primary">Agregar al carrito</Button>
      </Card.Body>
    </Card>
  </Col>
))}
</Row>
    );
  };

export default Item