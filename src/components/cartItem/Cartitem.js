import { useCart } from "../../Provider/cartProvider";

const Cart = () => {
  const { cart } = useCart();
  return (
    <div className="container mx-auto max-w-screen-xl grid grid-cols-12 gap-8 px-4">
      <div className=" col-span-12 md:col-span-8 xl:col-span-9 rounded-md p-4 flex gap-4  bg-slate-100 h-fit shadow-md">
        <div className="w-full flex flex-col gap-y-4 mb-8">
          {cart.map((item , index) => {
            return (
              <div className="flex flex-col items-center md:flex-row w-full gap-8 p-2 border-b-2 border-slate-300 " key={index}>
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
                  <h1>
                    Price : <b>{item.price}</b> $
                  </h1>
                </div>
                <div className="h-auto flex items-center justify-center">
                  <span className="w-8 h-8 rounded-md border border-slate-800 flex justify-center items-center">{item.quantity}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="col-span-12 md:col-span-4 xl:col-span-3">
        <div className="h-fit bg-slate-100 shadow-md p-4 rounded-md flex flex-col gap-y-8 text-slate-800">
          <div className="flex flex-col gap-y-4">
            <p className="text-base ">Total price : 102202</p>
            <div>
              <input
                className="p-2 bg-transparent rounded-tl-md rounded-bl-md border border-1 border-slate-300"
                placeholder="ABCD"
              />
              <button className="p-2 bg-orange-400 rounded-tr-md rounded-br-md text-slate-100">
                Cont
              </button>
            </div>
            <p>Offer : 0</p>
            <hr />
            <h1 className="font-bold">Total priec : 1051521</h1>
          </div>
          <button className="mt-8 bg-orange-500 p-4 rounded-md text-slate-100 hover:ring-2 hover:ring-offset-2 hover:ring-orange-400 focus:ring-2 focus:ring-offset-2 focus:ring-orange-400 hover:shadow-lg hover:shadow-orange-400">
            continue
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;

/*

<div className="flex flex-col md:flex-row w-full gap-8 p-2 border-b-2 border-slate-300 ">
              <div>Image</div>
              <div className="flex flex-1 flex-col gap-4">
                <h1>Brand</h1>
                <p>Model</p>
                <h1>Size</h1>
                <h1>Price</h1>
              </div>
              <div className="h-auto flex items-center justify-center">
                <span>01</span>
              </div>
            </div>
*/
