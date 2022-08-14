import {Routes , Route} from 'react-router-dom';
import CartPage from './pages/CartPage';
import HomePage from './pages/HomePage';
import CartProvider from './Provider/cartProvider';
const App = () => {
    return (
      <CartProvider>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/cart" element={<CartPage/>} />
        </Routes>
      </CartProvider>
    );
}
 
export default App;
