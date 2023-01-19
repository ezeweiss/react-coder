import { Box, Heading, SimpleGrid } from '@chakra-ui/react';
import React from 'react'
import { useLocation } from 'react-router-dom';
import Item from './Item';

function ItemListContainer({ products, greeting }) {
  const mapCategories = {
    women: "women's clothing",
    men: "men's clothing",
    jewelery: "jewelery",
    electronic: "electronics",
  };

  const category = useLocation().pathname.split("/")[1] || "all";
  const stateCategory = mapCategories[category] || "all";

  return (
    <>
      <Box textAlign="center">
        <Heading
          as="h1"
          color="blue.400"
          fontSize="2xl"
          fontWeight="bold"
          lineHeight="tall"
          letterSpacing="wide"
          textAlign="center"
        >
          {greeting}
        </Heading>
      </Box>
      <SimpleGrid minChildWidth="250px" spacing="20px" m="6">
        {products
          .filter(
            (product) =>
              product.category === stateCategory ||
              stateCategory === "all"
          )
          .map((product) => (
            <Item
              id={product.id}
              image={product.image}
              title={product.title}
              description={product.description}
              price={product.price}
            />
          ))}
      </SimpleGrid>
    </>
  );
}

export default ItemListContainer;