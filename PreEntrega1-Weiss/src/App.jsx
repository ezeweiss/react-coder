import { Container } from '@chakra-ui/react';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom'
import './App.css'
import CartWidget from './components/CartWidget';
import Item from './components/Item';
import ItemDetailContainer from './components/ItemDetailContainer';
import ItemListContainer from './components/ItemListContainer'
import NavBar from './components/NavBar/NavBar'



function App() {
  const [products, setProducts] = useState([]);

  const getProducts = () => {
    axios.get("https://fakestoreapi.com/products").then((response) => {
      console.log(response.data);
      setProducts(response.data);
    });
  };
  useEffect(() => {
    getProducts();
  }, []);

  return (
    <Container width="100%" maxWidth="100vw" padding={0}>
      <NavBar CartWidget={CartWidget} />
      <Routes>
        <Route path="*" element={<Navigate to="/" />} />
        <Route
          path="/"
          element={
            <ItemListContainer
              Item={Item}
              products={products}
              greeting="¡Welcome to ShopStore!"
            />
          }
        />
        <Route
          path="/product/:id"
          element={<ItemDetailContainer products={products} />}
        />

        <Route
          path="/women"
          element={
            <ItemListContainer
              Item={Item}
              products={products}
              greeting="Products for Women"
            />
          }
        />
        <Route
          path="/men"
          element={
            <ItemListContainer
              Item={Item}
              products={products}
              greeting="Products for Men"
            />
          }
        />
        <Route
          path="/jewelery"
          element={
            <ItemListContainer
              Item={Item}
              products={products}
              greeting="Our Jewelry"
            />
          }
        />
        <Route
          path="/electronic"
          element={
            <ItemListContainer
              Item={Item}
              products={products}
              greeting="Products of Electronic"
            />
          }
        />
      </Routes>
    </Container>
  )
}

export default App
