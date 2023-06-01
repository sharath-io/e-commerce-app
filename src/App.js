import { Routes,Route } from 'react-router-dom';
import './App.css';
import {Home,Products,Wishlist,Cart,ProductDetail,Login} from './pages';
import { Header } from './components/header';
import Mockman from "mockman-js";
import { RequiredAuth } from './components/requiredAuth';

function App() {
  return (
    <div className="App">
      <Header/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/products" element={<Products/>}/>
          <Route path="/wishlist" element={<RequiredAuth><Wishlist/></RequiredAuth>}/>
          <Route path="/cart" element={<RequiredAuth><Cart/></RequiredAuth>}/>
          <Route path="/mockman" element={<Mockman/>}/>
          <Route path="/product/:productId" element={<ProductDetail/>}/>
          <Route path="/login" element={<Login/>}/>
        </Routes> 
    </div>
  );
}

export default App;
