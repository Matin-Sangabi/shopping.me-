import {Routes , Route} from 'react-router-dom';
import CartPage from './pages/CartPage';
import CheckOutPage from './pages/checkoutPage';
import HomePage from './pages/HomePage';
import CartProvider from './Provider/cartProvider';
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import SignUpPage from './pages/signUpPage';
import LoginPage from './pages/LoginPage';
import AutProvider from './Provider/AuthProvider';
import Profile from './pages/profilePage';
const App = () => {
    return (
      <AutProvider>
        <CartProvider>
        <ToastContainer />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/checkout" element={<CheckOutPage />} />
          <Route path="/signIn" element={<SignUpPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </CartProvider>
      </AutProvider>
    );
}
 
export default App;
