import React from "react";
import logo from "./images/logo.png";
import { MdAccountCircle } from "react-icons/md";
import { MdOutlineShoppingCartCheckout } from "react-icons/md";
// import heroimg from "./images/1.jpg"
import { Link } from "react-router-dom";
function Header() {
  return (
    <div>
      <nav className="  flex justify-between items-center h-[80px] text-red-400 bg-green-300  font-bold">
        <label>
          <img className="w-[130px] mr-[60px]" src={logo} alt="logo" />
        </label>
        <ul className="flex gap-[100px]">
          <li className=" hover:text-sky-700">
            <a href=" ">HOME</a>
          </li>
          <li className="  hover:text-sky-700">
            <a href=" ">ABOUT US</a>
          </li>
          <li className="  hover:text-sky-700">
            <a href=" ">CONTACT</a>
          </li>
          <li className="  hover:text-sky-700">
            <a href=" ">SERVICES</a>
          </li>
        </ul>
        <label className="mr-10 flex">
          <button className="text-xs hover:bg-sky-700 bg-red-400 text-green-300 p-[10px] flex justify-center items-center gap-2 rounded-[10px]">
            <MdOutlineShoppingCartCheckout />
            Add to cart
          </button>
          <Link to="Loginpage"><MdAccountCircle className="font-bold text-3xl ml-20 " /></Link>
        </label>
      </nav>
      <header className="hero   w-[100%] h-[600px] bg-cover ">
        {/* <img className="w-full h-full object-contain absolute  " src={heroimg} alt="hero img"/> */}
        <div className="">
          <h1 className="text-green-300 font-[300px] text-8xl ml-[70%] pt-[1%]">
            MAKE YOUR FOOD{" "}
          </h1>
          <h1 className="text-green-300 font-[300px] text-4xl ml-[70%] pb-6 ">
            WITH HEALTHY...
          </h1>
          <button className="text-xs hover:bg-sky-700 w-[150px] bg-red-400 text-green-300 p-[20px] ml-[70%]  rounded-[10px]">
            Order Now
          </button>
        </div>
      </header>
    </div>
  );
}

export default Header;
