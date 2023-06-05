import { Routes,Route } from 'react-router-dom';
import './App.css';
import {Home,Products,Wishlist,Cart,ProductDetail,Login,SignUp,AccountDetails,AddressDetails,OrderHistory,UserDetails} from './pages';
import {RequiredAuth} from './components/requiredAuth';
import { Header } from './components/header';
import Mockman from "mockman-js";

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
          <Route path="/signup" element={<SignUp/>}/>

          <Route path="/account-details" element={<RequiredAuth><AccountDetails/></RequiredAuth>}>
            <Route path="addressDetails" element={<AddressDetails/>}/>
            <Route path="orderDetails" element={<OrderHistory/>}/>
            <Route path="userDetails" element={<UserDetails/>}/>
          </Route>
        </Routes> 
      </div>
    );
  }

  export default App;