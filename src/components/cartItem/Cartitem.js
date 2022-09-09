import { Link } from "react-router-dom";
import {toast} from 'react-toastify';
import { useCart, useCartAction } from "../../Provider/cartProvider";
import { HiChevronUp, HiChevronDown } from "react-icons/hi";
import { FiTrash2 } from "react-icons/fi";
import { useAuth } from "../../Provider/AuthProvider";



const Cart = () => {
  const { cart , total } = useCart();
  const dispatch = useCartAction();
  
  const incrrement = (cartItem) => {
    dispatch({type : "ADD_TO_CART" , payload : cartItem})
  }

  const decHamdler = (cartItem) =>{
    toast.success(`${cartItem.model} was deleted`, {
      position: toast.POSITION.TOP_CENTER,
    });
    dispatch({ type: "REMOVE_PRODUCT" , payload : cartItem });
  }

  return (
    <div className="container mx-auto max-w-screen-xl grid grid-cols-12 gap-8 px-4 mt-8">
      <div className=" col-span-12 md:col-span-8 xl:col-span-9 rounded-md p-4 flex gap-4  bg-slate-100 h-fit shadow-md">
        <div className="w-full flex flex-col gap-y-4 mb-8">
          {cart.map((item , index) => {
            return (
              <div
                className="flex flex-col items-center md:flex-row w-full gap-8 p-2 border-b-2 border-slate-300 "
                key={index}
              >
                <div className="w-52 md:w-40 p-2 bg-slate-400 rounded-md shadow-lg">
                  <img
                    src={require(`./../../${item.image}`)}
                    alt={item.model}
                  />
                </div>
                <div className="flex flex-1 flex-col gap-4 p-2">
                  <h1>
                    Brand : <b>{item.brand}</b>
                  </h1>
                  <p>Model : {item.model}</p>
                  <p>Size : {item.size.toString()}</p>
                  <div className="flex gap-x-2 font-bold">
                    Price :
                    <div>
                      {item.offPrice > 0 ? (
                        <div className="flex flex-col items-center">
                          <del className="text-sm text-gray-500">{item.price} $</del> {item.price - item.offPrice}$
                        </div>
                      ) : (
                        <span>{item.price * item.quantity} $</span>
                      )}
                    </div>
                  </div>
                </div>
                <div className="h-full w-full md:w-auto flex items-center justify-center flex-col py-4">
                  <div className="flex-1 flex gap-2 items-center">
                    <button
                      className="text-green-500 text-xl"
                      onClick={() => incrrement(item)}
                    >
                      <HiChevronUp />
                    </button>
                    <span className="w-8 h-8 rounded-md border border-slate-800 flex justify-center items-center">
                      {item.quantity}
                    </span>
                    <button
                      className={
                        item.quantity === 1
                          ? "text-rose-500 text-xl font-bold hover:ring hover:ring-offset-2 rounded-md p-1 hover:ring-rose-500"
                          : "text-rose-500 text-xl"
                      }
                      onClick={() => decHamdler(item)}
                    >
                      {item.quantity === 1 ? <FiTrash2 /> : <HiChevronDown />}
                    </button>
                  </div>
                  <div className="flex items-end ">
                    <button className="p-2  rounded-md ring-2 w-full  ring-rose-500  text-rose-500 hover:ring-offset-2 hover:shadow-md hover:shadow-rose-500 font-bold">
                      <FiTrash2 />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <CartTotla total={total} cart={cart}/>
    </div>
  );
};

export default Cart;


const CartTotla = ({total ,cart}) =>{
  const auth = useAuth();
  const orginalPrice = cart.reduce((acc , curr)=> acc + curr.quantity * curr.price , 0);
  return (
    <div className="col-span-12 md:col-span-4 xl:col-span-3">
      <div className="h-fit bg-slate-100 shadow-md p-4 rounded-md flex flex-col gap-y-8 text-slate-800">
        <div className="flex flex-col gap-y-4">
          <p className="text-base ">Total price : {orginalPrice} $</p>
          <div>
            <input
              className="p-2 bg-transparent rounded-tl-md rounded-bl-md border border-1 border-slate-300"
              placeholder="ABCD"
            />
            <button className="p-2 bg-orange-400 rounded-tr-md rounded-br-md text-slate-100">
              Cont
            </button>
          </div>
          <p>Offer : {total} $</p>
          <hr />
          <h1 className="font-bold">Total priec : {orginalPrice - total}</h1>
        </div>
        <Link to={auth ? "/checkout" : "/signIn?redirect=checkout"} className="mt-8 bg-orange-500 p-4 rounded-md text-slate-100 hover:ring-2 hover:ring-offset-2 hover:ring-orange-400 focus:ring-2 focus:ring-offset-2 focus:ring-orange-400 hover:shadow-lg hover:shadow-orange-400">
          continue
        </Link>
      </div>
    </div>
  );
}