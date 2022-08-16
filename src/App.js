import './App.css';
import NavBar from "./components/NavBar";
import ItemListContainer from './components/ItemListContainer';
import ItemDetailConteiner from './components/ItemDetailConteiner';
import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <NavBar/>
        <Routes>
          <Route path='/' element={<ItemListContainer greeting="catalogo"/>}/>
          <Route path='/detalle/:id' element={<ItemDetailConteiner/>}/>
          <Route path='/category/:idCategory' element={<ItemListContainer greeting="productos"/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
