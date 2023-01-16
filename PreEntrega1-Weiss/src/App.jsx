import { Navigate, Route, Routes } from 'react-router-dom'
import './App.css'
import ItemDetailContainer from './components/ItemDetailContainer';
import ItemListContainer from './components/ItemListContainer'
import NavBar from './components/NavBar'
import data from "./data.json";


function App() {
  const { products } = data;
  return (
    <div className="App">
     <NavBar/><br/>     
    <Routes>
            <Route path="/" element={<ItemListContainer productos={products}/>} />
            <Route path="/productos/:name" element={<ItemDetailContainer data={data} />} />
            <Route path="*" element={<Navigate to="/" />} />
    </Routes>

    </div>
  )
}

export default App
