import './App.css';
import NavBar from "./components/NavBar";
import ItemListContainer from './components/ItemListContainer';
import ItemDetailConteiner from './components/ItemDetailConteiner';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CustomCartContextProvider from './context/CartContext';
import { Cart } from './components/Cart';
import firestoreDB from "./database/firestone";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <CustomCartContextProvider>
        <NavBar/>
          <Routes>
            <Route path='/' element={<ItemListContainer greeting="catalogo"/>}/>
            <Route path='/cart' element={<Cart/>}/>
            <Route path='/detalle/:id' element={<ItemDetailConteiner/>}/>
            <Route path='/category/:idCategory' element={<ItemListContainer greeting="productos"/>}/>
            <Route path='/cart' element={<Cart/>}/>
          </Routes>
        </CustomCartContextProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
