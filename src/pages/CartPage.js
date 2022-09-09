import React from "react";
import Cart from "../components/cartItem/Cartitem";
import EmptyCart from "../components/EmptyCart/EmptyCart";
import Layout from "../layout/Layout";
import { useCart } from "../Provider/cartProvider";

function CartPage() {
  const {cart} = useCart();
  return (
    <Layout>
        {cart.length ? (<Cart/>) : (<EmptyCart/>)}
    </Layout>
  );
}

export default CartPage;
