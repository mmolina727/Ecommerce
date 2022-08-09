import './App.css';
import NavBar from "./components/NavBar";
import ItemListContainer from './components/ItemListContainer';
import ItemDetailConteiner from './components/ItemDetailConteiner';


function App() {
  return (
    <div className="App">
      <NavBar/>
      <ItemListContainer greeting="ofertas"/>
      <ItemDetailConteiner/>
    </div>
  );
}

export default App;
