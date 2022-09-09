import Layout from "../layout/Layout";
import axios from "axios";
import { useEffect, useState } from "react";
import { HiShoppingCart } from "react-icons/hi";

import { useCart, useCartAction } from "../Provider/cartProvider";
import { checkIncart } from "../utils/checkInCart";
import { toast } from "react-toastify";

const HomePage = () => {
  const [products, setProducts] = useState([]);
  const dispatch = useCartAction();
  const { cart } = useCart();
  useEffect(() => {
    const getAllProducts = async () => {
      try {
        const response = await axios.get("http://localhost:3001/Products");
        setProducts(response.data);
      } catch (err) {
        console.log(err);
      }
    };
    getAllProducts();
  }, []);

  const loading = () => {
    return (
      <div className="w-full h-96 flex justify-center items-center">
        <svg
          className="animate-spin -ml-1 mr-3 h-14 w-14 text-orange-600"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
        >
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"
          ></circle>
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
          ></path>
        </svg>
      </div>
    );
  };

  const addedToCartHandler = (product) => {
    toast.success(`${product.model} added to cart `, {
      position: toast.POSITION.TOP_CENTER,
    });
    dispatch({ type: "ADD_TO_CART", payload: product });
  };

  const renderProducts = () => {
    return (
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8 mb-8 px-4 mt-8">
        {products.map((product) => {
          return (
            <div
              className="bg-slate-50 p-4 flex flex-col gap-4 mx-auto shadow-md rounded-md"
              key={product.id}
            >
              <div className="bg-slate-300 p-2  rounded-md ">
                <img
                  src={require(`./../${product.image}`)}
                  alt={product.model}
                  className="w-full h-auto"
                />
              </div>
              <div className="flxe w-full justify-between items-center">
                <div>
                  <p>{product.brand}</p>
                </div>
                <div>
                  <p>{product.price}</p>
                </div>
              </div>
              <button
                onClick={() => addedToCartHandler(product)}
                className="p-2 rounded-md bg-orange-400 text-slate-200 flex justify-around items-center hover:ring-2 hover:ring-offset-2 hover:ring-orange-400 focus:ring-2 focus:ring-offset-2 focus:ring-orange-400 hover:shadow-lg hover:shadow-orange-400"
                disabled={checkIncart(cart, product) ? true : false}
              >
                {checkIncart(cart, product) ? "In Cart" : "Add To Cart"}
                <span>
                  <HiShoppingCart />
                </span>
              </button>

            </div>
          );
        })}
      </div>
    );
  };
  return (
    <Layout>{products.length === 0 ? loading() : renderProducts()}</Layout>
  );
};

export default HomePage;
