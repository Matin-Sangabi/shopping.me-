import React from 'react'
import { NavLink } from "react-router-dom";
import styled from 'styled-components';

const navigator = [
  { name: "Home", to: "/" },
  { name: "Cart", to: "/cart" },
];

const UL = styled.ul`
  @media (max-width: 767px) {
    transform: ${({ open }) => !open ? "translateX(1000px)" : "translateX(0px)"};
    transition : ${({open}) => open ? "transform 0.3s ease-in-out" : ""}
  }
`;

const RightNav = ({open}) => {   
  return (
    <UL open={open} className="bg-gray-500 w-72 fixed top-0 right-0 h-screen pt-14 md:flex flex-col  flex-nowrap md:flex-row md:relative md:w-auto md:h-0 md:pt-0 md:gap-x-4">
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
              {nav.name}
            </NavLink>
          </li>
        );
      })}
    </UL>
  );
}
/*
hidden bg-gray-500 w-72 fixed top-0 right-0 h-screen pt-14 md:flex flex-col flex-nowrap md:flex-row  md:h-0 md:pt-0 
*/ 
export default RightNav