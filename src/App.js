import './App.css';
import NavBar from "./components/NavBar";
import ItemListContainer from './components/ItemListContainer';
import Card from './components/Card';
import ItemCount from './components/ItemCount';


function App() {
  return (
    <div className="App">
      <NavBar/>
      <ItemListContainer greeting="Ofertas"/>
      <Card 
        image="salamin.jpg" product="Salamin picado grueso CAGNOLI" price="$500 x Ud">
        <ItemCount initial="1" stock="5"/>
      </Card>
    </div>
  );
}

export default App;
