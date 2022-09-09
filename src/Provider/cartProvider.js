import { useContext , createContext , useReducer } from "react";
import { cartReducer } from "./cartReducer";
const CartContenxt = createContext();
const CartProviderDispatcher = createContext();


const initialState = {
    cart : [],
    total : 0,
}

const CartProvider = ({children}) => {

    const [cart , dispatch] = useReducer(cartReducer , initialState)

    return ( 
        <CartContenxt.Provider value={cart}>
            <CartProviderDispatcher.Provider value={dispatch}>
                {children}
            </CartProviderDispatcher.Provider>
        </CartContenxt.Provider>
     );
}
 
export default CartProvider;

export const useCart = () => useContext(CartContenxt);
export const useCartAction = () => useContext(CartProviderDispatcher);
