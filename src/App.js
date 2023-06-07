import { Routes,Route } from 'react-router-dom';
import './App.css';
import {Home,Products,Wishlist,Cart,ProductDetail,Login,SignUp,AccountDetails,AddressDetails,OrderHistory,UserDetails, CheckOut} from './pages';
import {RequiredAuth} from './components/requiredAuth';
import { Navbar } from './components/Navbar/navbar';
import Mockman from "mockman-js";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
    return (
      <div className="App">
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/products" element={<Products/>}/>
          <Route path="/wishlist" element={<RequiredAuth><Wishlist/></RequiredAuth>}/>
          <Route path="/cart" element={<RequiredAuth><Cart/></RequiredAuth>}/>
          <Route path="/mockman" element={<Mockman/>}/>
          <Route path="/product/:productId" element={<ProductDetail/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/signup" element={<SignUp/>}/>
          <Route path="/checkout" element={<RequiredAuth><CheckOut/></RequiredAuth>} />
          
          <Route path="/account-details" element={<RequiredAuth><AccountDetails/></RequiredAuth>}>
            <Route path="userDetails" element={<UserDetails/>}/>
            <Route path="addressDetails" element={<AddressDetails/>}/>
            <Route path="orderDetails" element={<OrderHistory/>}/>
          </Route>
        </Routes> 
        <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      </div>
    );
  }

  export default App;