import './App.css';
import "bootstrap/dist/css/bootstrap.css";
import NavBar from "./components/NavBar";
import Footer from './components/Footer';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailConteiner from './components/ItemDetailConteiner';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CustomCartContextProvider from './context/CartContext';
import { Cart } from './components/Cart';
import { Banner } from './components/Banner';
import { Nosotros } from './components/Nosotros';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <CustomCartContextProvider>
        <NavBar/>
          <Routes>
            <Route path='/' element={<ItemListContainer greeting="Ofertas imperdibles!"/>}/>
            <Route path='/nosotros' element={<Nosotros/>}/>
            <Route path='/cart' element={<Cart/>}/>
            <Route path='/detalle/:id' element={<ItemDetailConteiner/>}/>
            <Route path='/category/:idCategory' element={<ItemListContainer greeting=""/>}/>
            <Route path='/cart' element={<Cart/>}/>
          </Routes>
        <Footer/>
        </CustomCartContextProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
