import { Link } from "react-router-dom";
import React from 'react';
//import {useState} from "react";

function Header() {
  //const [ user, setLoginUser] = useState({});

    return (
        <nav className="flex flex-wrap items-center justify-between bg-gray-800 ">
  <div className="container mx-auto flex flex-wrap items-center justify-between">
    <div className="w-full relative flex justify-between lg:w-auto  lg:static lg:block lg:justify-start">
      <Link className="text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase text-white" to="/">
        <img className="hidden lg:block " src="https://raw.githubusercontent.com/sanyagoyal2000/Pictures/5e31a436492040a45962f772b21352123e34cbde/final.svg" alt="Professionaled"/>
      </Link>
      <button className="cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none" type="button">
        <span className="block relative w-6 h-px rounded-sm bg-white"></span>
        <span className="block relative w-6 h-px rounded-sm bg-white mt-1"></span>
        <span className="block relative w-6 h-px rounded-sm bg-white mt-1"></span>
      </button>
    </div>
    <div className="lg:flex flex-grow items-center" id="example-navbar-warning">
      <ul className="flex flex-col lg:flex-row list-none ml-auto">
          <li className="nav-item">
            <Link className="px-3 py-2 flex items-center text-sm uppercase font-bold leading-snug text-white hover:opacity-75" to="/about">
              About Us
            </Link>
          </li>
          <li className="nav-item">
            <Link className="px-3 py-2 flex items-center text-sm uppercase font-bold leading-snug text-white hover:opacity-75" to="/mentor">
              Mentor
            </Link>
          </li>
          <li className="nav-item">
            <Link className="px-3 py-2 flex items-center text-sm uppercase font-bold leading-snug text-white hover:opacity-75" to="/mentee">
              Mentee
            </Link>
          </li>
         <li className="nav-item">
            <Link className="px-3 py-2 flex items-center text-sm uppercase font-bold leading-snug text-white hover:opacity-75" to="/blog">
              Blogs
            </Link>
          </li>
          <li className="nav-item">
            <Link className="px-3 py-2 flex items-center text-sm uppercase font-bold leading-snug text-white hover:opacity-75" to="/contact">
              Contact Us
            </Link>
          </li>
          <li className="nav-item">
           <Link className="px-3 py-2 flex items-center text-sm uppercase font-bold leading-snug text-white hover:opacity-75" to="/login">
              Logout
              </Link>
            
          </li>
      </ul>
    </div>
  </div>
</nav>
    )
}

export default Header
