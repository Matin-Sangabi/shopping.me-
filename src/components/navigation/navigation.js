import Burger from "./Burger";

const Navigation = () => {
  return (
    <header className="w-full p-4 bg-slate-100 text-slate-700 mb-8">
      <nav className="px-4 flex justify-between items-start max-w-screen-xl  container mx-auto">
        <h1 className="font-bold text-xl">
          Shopping<span className="absolute text-sm leading-tight">.Me</span>
        </h1>
        <Burger/>
      </nav>
    </header>
  );
};

export default Navigation;
