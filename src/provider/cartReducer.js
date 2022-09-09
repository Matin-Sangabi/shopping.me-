const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      //1.product in cart ? => item.quantity ++ : push to cart
      const updatedCart = [...state.cart];
      const index = updatedCart.findIndex(
        (cart) => cart.id === action.payload.id
      );
      if (index < 0) {
        updatedCart.push({ ...action.payload, quantity: 1 }); // or {...state , cart : [...state.cart , {...action.payload.quantity : 1}]}
      } else {
        const updatedItem = { ...updatedCart[index] };
        updatedItem.quantity++;
        updatedCart[index] = updatedItem;
      }
      return { ...state, cart: updatedCart };
    default:
      return state;
  }
};

export default cartReducer;
