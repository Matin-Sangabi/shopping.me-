import React from 'react'
import { NavLink } from "react-router-dom";
import styled from 'styled-components';
import { useAuth } from '../../Provider/AuthProvider';
import { useCart } from '../../Provider/cartProvider';



const UL = styled.ul`
  @media (max-width: 767px) {
    transform: ${({ open }) => !open ? "translateX(1000px)" : "translateX(0px)"};
    transition : ${({open}) => open ? "transform 0.3s ease-in-out" : ""}
  }
`;

const RightNav = ({open}) => {   
  const {cart} = useCart();
  const auth = useAuth();
const navigator = [
  { name: "Home", to: "/" },
  { name: "Cart", to: "/cart", length: cart.length },
  {name : auth ? 'profile' : 'Login/SinUp' , to:auth ? "/profile" : "/login"}
];
  return (
    <UL open={open} className="z-10 bg-gray-500 w-72 fixed top-0 right-0 h-screen pt-14 md:flex flex-col  flex-nowrap md:flex-row md:relative md:w-auto md:h-0 md:pt-0 md:gap-x-12 opacity-90 rounded-tl-lg rounded-bl-lg">
      {navigator.map((nav, index) => {
        return (
          <li key={index} className="p-4 text-white md:text-slate-600 md:p-0">
            <NavLink
              to={nav.to}
              className={({ isActive }) =>
                isActive
                  ? "block border-b-2 border-gray-500  p-4 md:p-0 hover:bg-slate-100 hover:text-gray-600 rounded-md md:rounded-none"
                  : "block p-4 md:p-0 hover:bg-slate-100 hover:text-gray-600 rounded-lg md:hover:border-b-2 md:hover:border-gray-500 md:rounded-none transition-all ease-in-out delay-200"
              }
            >
              <p className='relative'>
                {nav.name}
                <span
                
                  className={
                    nav.length >=0
                      ? " w-5 h-5 text-xs bg-orange-500 text-slate-100 rounded-full ml-2 absolute flex justify-center items-center top-0 left-7 bottom-2 right-0"
                      : "none"
                  }
                >
                  {nav.length}
                </span>
              </p>
            </NavLink>
          </li>
        );
      })}
    </UL>
  );
}

export default RightNav