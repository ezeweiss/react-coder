import React from 'react'
import { Button, Card, CardGroup, Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Item = function ({ name, description, precio, picture }) {
    return (
    <CardGroup>
        <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={picture} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>
          {description}
        </Card.Text>
        <Card.Subtitle>{precio}</Card.Subtitle>
        <Button variant="primary">Agregar al carrito</Button>
      </Card.Body>
    </Card>
    </CardGroup> 
    );
  };

export default Item