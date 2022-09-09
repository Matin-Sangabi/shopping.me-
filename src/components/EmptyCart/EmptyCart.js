import { Link } from "react-router-dom";

const EmptyCart = () => {
  return (
    <div className="w-full  items-center flex flex-col gap-y-4 px-4">
      <div className=" mt-8 p-8">
        <img
          src={require("./../../assets/images/empty-cart.png")}
          alt="Empty_CARt"
          className="w-full h-auto max-w-xs md:max-w-md"
        />
      </div>
      <h1 className="text-2xl text-center text-slate-700">
        Oop's Youre Cart List was Empty
      </h1>
      <p className="text-center w-80 text-orange-600 text-xl font-bold">
        Looks Like you haven't added anything to youre cart yet!{" "}
      </p>
      <Link
        to="/"
        className="block p-4 rounded-md text-slate-100 bg-orange-600 w-64 text-center "
      >
        Shop now
      </Link>
    </div>
  );
};

export default EmptyCart;
