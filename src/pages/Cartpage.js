import React from "react";
import Layout from "../layout/Layout";
import { useCart } from "../provider/CartProvider";
function CartPage() {
  const {cart} = useCart();

  return (
    <Layout>
      {cart.length ?( cart.map((cart , index)=>{
        return (
            <div key={index}>
                <p>{cart.brand}</p>
                <p>{cart.model}</p>
            </div>
        )
      }) ): (<p>cart list was Empty</p>) }
    </Layout>
  );
}

export default CartPage;
