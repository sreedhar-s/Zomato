import React from "react";
import { FaUserAlt } from "react-icons/fa";
import {HiLocationMarker} from "react-icons/hi";
import {IoMdArrowDropdown, IoMdArrowDropup} from "react-icons/io";
import {BiSearch} from "react-icons/bi";

const MobileNav = () => {
  return (
    <div className="flex items-center justify-between md:hidden">
      <div className="w-28">
        <img
          src="https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png"
          alt="logo"
          className="w-full h-full"
        />
      </div>
      <div className="flex items-center gap-3">
        <button className="bg-zomato-400 text-white py-2 px-3 rounded-full">
          Use App
        </button>
        <span className="border p-2 border-gray-300 text-zomato-400 rounded-full">
          <FaUserAlt />
        </span>
      </div>
    </div>
  );
};

const MediumNav = () => {
  return (
    <>
      <div className="hidden md:flex w-full items-center justify-between gap-3 lg:hidden">
        <div className="w-28">
          <img
            src="https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png"
            alt="logo"
            className="w-full h-full"
          />
        </div>
        <div className="w-full flex items-center gap-3 border border-gray-200 bg-white shadow-md p-3">
            <div className="flex items-center gap-2 border-r-2 pr-2 border-gray-300">
                <span className="text-zomato-400 ">
                    <HiLocationMarker />
                </span>
                <input type="text" placeholder="Guntakal" className="focus:outline-none" />
                <IoMdArrowDropdown />
            </div>
            <div className="flex items-center gap-2">
                <BiSearch />
                <input 
                    type="search" 
                    placeholder="Search for restaurant, cuisine or a dish" 
                    className="w-full focus:outline-none"
                />
            </div>
        </div>
        <div className="flex items-center gap-2">
            <button className="text-gray-400 hover:text-gray-800">
                Login
            </button>
            <button className="text-gray-400 hover:text-gray-800">
                signup
            </button>
        </div>

      </div>
    </>
  );
};

const LargeNav = () => {
  return (
    <>
      <div className="container px-20 mx-auto">
        <div className="hidden lg:flex items-center justify-between gap-3">
          <div className="w-28">
            <img
              src="https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png"
              alt="logo"
              className="w-full h-full"
            />
          </div>
          <div className="w-3/4 flex items-center gap-3 border border-gray-200 bg-white shadow-md p-3">
            <div className="flex items-center gap-2 border-r-2 pr-2 border-gray-300">
              <span className="text-zomato-400 ">
                <HiLocationMarker />
              </span>
              <input
                type="text"
                placeholder="Guntakal"
                className="focus:outline-none"
              />
              <IoMdArrowDropdown />
            </div>
            <div className="flex w-full items-center gap-2">
              <BiSearch />
              <input
                type="search"
                placeholder="Search for restaurant, cuisine or a dish"
                className="w-full focus:outline-none"
              />
            </div>
          </div>
          <div className="ml-28 flex items-center gap-4">
            <button className="text-gray-400 hover:text-gray-800">Login</button>
            <button className="text-gray-400 hover:text-gray-800">
              signup
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

const Navbar = () => {
  return (
    <>
      <nav className="p-4 bg-white shadow-md">
        <MobileNav />
        <MediumNav />
        <LargeNav />
      </nav>
    </>
  );
};

export default Navbar;
