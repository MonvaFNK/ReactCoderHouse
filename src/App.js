import NavBar from './components/Navbar';
import ItemListContainer from './components/ItemList/ItemListContainer.js';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Cart from './components/Cart/Cart';
import Checkout from './components/Checkout';
import ItemDetailContainer from './components/ItemDetail/ItemDetailContainer';


function App() {
  return (
    <BrowserRouter>
      <NavBar />  
      <Routes>
      <Route path='/' element={<ItemListContainer greeting={"Bienvenidos a mi Tienda"}/>} />
      <Route path='/category/:categoryId' element={<ItemListContainer greeting={"Bienvenidos a mi Tienda"}/>} />
      <Route path='/item/:id' element={<ItemDetailContainer/>} />
      <Route path='/cart' element={<Cart/>} />
      <Route path='/checkout' element={<Checkout/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
