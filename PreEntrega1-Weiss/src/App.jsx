import { Button, ButtonGroup, Card, CardBody, CardFooter, Divider, Heading, Image, Stack, Text } from '@chakra-ui/react'
import './App.css'
import ItemListContainer from './components/ItemListContainer'
import NavBar from './components/NavBar'

function App() {

  return (
    <div className="App">
     <NavBar/><br/>     
     <ItemListContainer greeting={"Bienvenido a la página de ShopStore!"}/>
    </div>
  )
}

export default App
