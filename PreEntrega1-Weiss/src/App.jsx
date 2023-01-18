import { Navigate, Route, Routes } from 'react-router-dom'
import './App.css'
import Footer from './components/Footer';
import Item from './components/Item';
import ItemDetailContainer from './components/ItemDetailContainer';
import ItemListContainer from './components/ItemListContainer'
import NavBar from './components/NavBar'
import data from "./data.json";


function App() {
  const { antiage, limpieza } = data;
  return (
    <div className="App">
     <NavBar/><br/>     
    <Routes>
            <Route path="/" element={<p>BIENVENIDOS A GB BEAUTY SHOP</p>} />
            <Route path="/antiage" element={<ItemListContainer productos={antiage}/>} />
            <Route path="/antiage/:id" element={<ItemDetailContainer data={data} />} />
            <Route path="/limpieza" element={<ItemListContainer productos={limpieza}/>} />
            <Route path="/limpieza/:id" element={<ItemDetailContainer data={data} />} />
            <Route path="*" element={<Navigate to="/" />} />
    </Routes>
    <br/>
    </div>
  )
}

export default App
