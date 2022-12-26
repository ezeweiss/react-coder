import { Card, CardBody, Divider, Image, Stack, Text } from '@chakra-ui/react'
import React from 'react'

const ItemListContainer = ({greeting}) => {
  return (
    <div>
      {/* <Card>
        <CardBody>
          <Text>{greeting}</Text>
        </CardBody>
      </Card> */}
      <Card maxW='sm'>
  <CardBody>
    <Image
      src='https://www.cronica.com.ar/__export/1602295346282/sites/cronica/img/2020/10/09/homero1_crop1602295019493.jpg_1902800913.jpg'
      alt='Green double couch with wooden legs'
      borderRadius='lg'
    />
    <Stack mt='6' spacing='3'>
      <Text>
        {greeting}
      </Text>
    </Stack>
  </CardBody>
  <Divider />
</Card>
    </div>
  )
}

export default ItemListContainer