import React from 'react'
import Item from './Item';

const ItemListContainer = ({productos}) => {
 return productos.map(({ id,name, description, precio, picture }) => (
    <Item key={id} id={id} name={name} description={description} precio={precio} picture={picture} />
  ));
}

export default ItemListContainer