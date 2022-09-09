export const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART": {
      //2works => index in cart qnt++ : push item to cart
      
      const updatedCart = [...state.cart];
      const index = updatedCart.findIndex(
        (cart) => cart.id === action.payload.id
      );
      if (index < 0) {
        updatedCart.push({ ...action.payload, quantity: 1 }); // or => {...state , cart : [...state.cart , {...action.payload.quantity : 1}]}
      } else {
        const updatedItem = { ...updatedCart[index] };
        updatedItem.quantity++;
        updatedCart[index] = updatedItem;
      }
      //localStorage.setItem('carts' , JSON.stringify({...state , cart : updatedCart}))
      return {
        ...state,
        cart: updatedCart,
        total: state.total + Number(action.payload.offPrice),
      };
    }

    case "REMOVE_PRODUCT": {
      const updatedCart = [...state.cart];
      const index = updatedCart.findIndex(
        (cart) => cart.id === action.payload.id
      );
      const updatedItem = { ...updatedCart[index] };

      if (updatedItem.quantity === 1) {
        const filterCart = updatedCart.filter(
          (cart) => cart.id !== action.payload.id
        );
        return {
          ...state,
          cart: filterCart,
          total: state.total - Number(action.payload.offPrice),
        };
      } else {
        updatedItem.quantity--;
        updatedCart[index] = updatedItem;
        return {
          ...state,
          cart: updatedCart,
          total: state.total - Number(action.payload.offPrice),
        };
      }
    }

    default:
      return state;
  }
};
