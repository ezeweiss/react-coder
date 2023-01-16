import React from 'react'
import { Button, Card } from 'react-bootstrap'
import Item from './Item';

const ItemListContainer = ({productos}) => {
 
      return productos.map(({ name, description, precio, picture }) => (
    <Item key={name} name={name} description={description} precio={precio} picture={picture} />
  ));

  
}

export default ItemListContainer