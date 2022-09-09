import React, { Fragment, useEffect, useState } from "react";
import RightNav from "./RightNav";

function Burger() {
  const [open, setOPen] = useState(false);
  const [windowSize , setWindowSize] = useState(window.innerWidth);
  useEffect(()=>{
     const updateWindowSize = () =>{
        setWindowSize(window.innerWidth);
     }
     window.addEventListener('resize' , updateWindowSize);
     if(windowSize>767){
        setOPen(false);
     }
     return () => window.removeEventListener('resize' , updateWindowSize);
  },[windowSize]);
  
  return (
    <Fragment>
      <div
        onClick={() => setOPen(!open)}
        className="w-8 h-8 fixed flex justify-around flex-col flex-nowrap top-4 right-5 z-20  md:hidden cursor-pointer"
      >
        <span
          className={
            open
              ? "w-8 h-1 rounded-md bg-gray-400 rotate-45  origin-[1px] transition-all ease-linear delay-400"
              : "w-8 h-1 rotate-0 bg-slate-600 block rounded-lg"
          }
        ></span>
        <span
          className={
            open
              ? "w-8 h-1 rounded-md bg-gray-400 translate-x-full opacity-0  transition-all ease-linear delay-400"
              : "w-8 h-1 translate-x-0 opacity-100 bg-slate-600 block rounded-lg"
          }
        ></span>
        <span
          className={
            open
              ? "w-8 h-1 rounded-md bg-gray-400 -rotate-45 origin-[1px]  transition-all ease-linear delay-400"
              : "w-8 h-1 rotate-0 bg-slate-600 block rounded-lg"
          }
        ></span>
        </div>
        <RightNav open={open}/>
    </Fragment>
  );
}

export default Burger;
