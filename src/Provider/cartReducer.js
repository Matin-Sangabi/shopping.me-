export const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
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
      return { ...state, cart: updatedCart };
    default:
      return state;
  }
};
