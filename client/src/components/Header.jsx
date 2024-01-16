import React from "react";
import {FaSearch} from 'react-icons/fa'
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <header className="bg-slate-200 shadow-md">
      <div className="flex justify-between items-center mx-auto max-w-6xl p-3">
        <Link to='/'>
            <h1 className="font-bold text-sm sm:text-xl flex flex-wrap">
            <span className="text-slate-500">Khan</span>
            <span className="text-slate-700">Estate</span>
            </h1>
        </Link>
        <form className="bg-slate-100 p-3 rounded-md flex items-center">
          <input
            type="text"
            name=""
            placeholder="Search..."
            id=""
            className="bg-transparent outline-none w-24 sm:w-64"
          />
          <FaSearch className="text-slate-600"/>
          
        </form>
        <ul className="flex gap-4">
            <Link to='/'>
                <li className="text-[18px] cursor-pointer hidden sm:inline text-slate-700 hover:underline">Home</li>
            </Link>
            <Link to='/about'>
                <li className="text-[18px] cursor-pointer hidden sm:inline text-slate-700 hover:underline" >About</li>
            </Link>
            <Link to='/sign-in'>
                <li className="text-[18px] cursor-pointer hidden sm:inline text-slate-700 hover:underline">SignIn</li>
            </Link>
        </ul>
      </div>
    </header>
  );
};
