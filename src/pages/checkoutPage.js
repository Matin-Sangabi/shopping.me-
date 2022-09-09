import Layout from "../layout/Layout";
import { useAuth } from "../Provider/AuthProvider";
import { useCart } from "../Provider/cartProvider";
import { IoLogoPaypal, IoAddOutline, IoCheckmark } from "react-icons/io5";
import { useState } from "react";
const plan = [{ name: "cart" }, { name: <IoLogoPaypal /> }];

const CheckOutPage = () => {
  const {cart , total} = useCart();
  const auth = useAuth();
  const [isClick, setIsClick] = useState(0);
  const togglePop = (id) => {
    setIsClick((prevState) => {
      return prevState ? 0 : id;
    });
  };
  const cartReducer = cart.reduce((arr , curr) => arr + curr.quantity * curr.price , 0);
  return (
    <Layout>
      <div className="flex justify-around gap-x-4 px-4">
        <div className=" text-slate-700">
          <div className="mt-4">
            <h1 className="font-bold text-2xl mb-4">
              Thanks to trust us {auth.name}
            </h1>
            <div className="w-full p-2 rounded-md ring-2 ring-slate-400">
              <p className="mb-2 font-bold">youre profile item :</p>
              <p>name : {auth.name}</p>
              <p>email : {auth.email}</p>
              <p>phoneNumber : {auth.phoneNumber}</p>
              <p className="my-2 font-bold">Youre Product in Cart :</p>
              {cart.map((item,index)=>{
                return(
                  <div key={index} className="flex w-full justify-between">
                    <p>{item.model}</p>
                    <p className="font-bold">{item.price - item.offPrice} $</p>
                  </div>
                )
              })}
            </div>
          </div>
          <div className="px-2 flex flex-col gap-y-4 mt-4 ">
            <h2 className="font-bold">Choose Payment : </h2>
            <div className="flex gap-8">
              {plan.map((item, index) => {
                return (
                  <div className="relative" key={index}>
                    <button
                      onClick={() => togglePop(index)}
                      className="w-16 h-10 p-2 ring ring-slate-600 rounded-md flex items-center justify-center hover:ring-orange-500 hover:text-orange-500 hover:font-bold cursor-pointer "
                    >
                      {item.name}
                    </button>
                    <span
                      className={
                        isClick === index
                          ? "text-sm text-slate-100 w-4 h-4 bg-green-500 rounded-full absolute -top-2 -right-2 flex items-center font-bold justify-center"
                          : "hidden"
                      }
                    >
                      <IoCheckmark />
                    </span>
                  </div>
                );
              })}
            </div>
            <ClickCart isClick={isClick} />
            <div className="w-full rounded-md ring-1 p-2 ring-slate-700">
              <p> total priec : <b>{cartReducer - total}</b> $</p>
            </div>
            <button className="w-full p-2 bg-orange-500 rounded-md text-slate-100 hover:ring hover:ring-offset-2 hover:ring-orange-500 transition-all ease-in-out delay-300">Continue</button>
          </div>
        </div>
        <div className="w-[500px] mt-12  items-center justify-center  hidden md:flex">
          <img
            src={require("./../assets/images/checkout.png")}
            className="w-full h-auto object-cover p-2"
            alt="checkout"
          />
        </div>
      </div>
    </Layout>
  );
};

export default CheckOutPage;

const ClickCart = ({ isClick }) => {
  return (
    <div>
      {isClick === 1 ? (
        <div className="flex gap-4 ">
          <div className="w-64  h-32 flex items-center bg-orange-300  rounded-md shadow-md shadow-orange-300 text-slate-600">
            <span className="p-2 ">
              youre pay pal cart : <b className="">123456789AsB5467</b>
            </span>
          </div>
          <button
            type="button"
            className="w-32 h-32 rounded-md ring-2 ring-slate-500 flex items-center justify-center hover:ring-orange-500 hover:text-orange-500 hover:shadow-md hover:shadow-orange-500"
          >
            <span className="w-8 h-8 rounded-full flex items-center justify-center text-2xl ">
              <IoAddOutline />
            </span>
          </button>
        </div>
      ) : (
        <div>
          <div></div>
          <div className="flex gap-4 ">
            <div className="w-64  h-32 flex items-center bg-orange-300  rounded-md shadow-md shadow-orange-300 text-slate-600">
              <span className="p-2 flex flex-col">
                youre cart number : <b className="">5047 0610 6192 1553</b>
              </span>
            </div>
            <button
              type="button"
              className="w-32 h-32 rounded-md ring-2 ring-slate-500 flex items-center justify-center hover:ring-orange-500 hover:text-orange-500 hover:shadow-md hover:shadow-orange-500"
            >
              <span className="w-8 h-8 rounded-full flex items-center justify-center text-2xl ">
                <IoAddOutline />
              </span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
