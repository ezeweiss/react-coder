import React from 'react'
import { useLocation, useParams } from 'react-router-dom';

const ItemDetailContainer = ({data}) => {
    const { id } = useParams();
    const type = useLocation().pathname.split("/")[1];
    const items = data[type]; 
    const item = items.find((item) => item.id === id); 
    return (
      <>
        <img src={item.picture}></img>
        <h2>{item.name}</h2>
        <p>{item.description}</p>
        <p>Precio: {item.precio}</p>
      </>
    );
}

export default ItemDetailContainer