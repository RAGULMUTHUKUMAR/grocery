import React from "react";
import product1 from "./images/36.png";
import product2 from "./images/1.png";
import product3 from "./images/29.png";
import product4 from "./images/35.png";
import { IoMdStar, IoMdStarHalf } from "react-icons/io";
import { MdOutlineShoppingCartCheckout } from "react-icons/md";

function Bestselling() {
  return (
    <div>
        <h1 className="font-bold text-4xl text-red-400 text-center mt-[100px] ">Best Selling Products</h1>
      <div className="flex justify-around items-center w-full h-[700px]">
        <div className="flex flex-col justify-center items-center gap-3 shadow-2xl shadow-slate-500 w-[300px] h-[400px]">
          <img src={product1} alt="image1" />
          <h1 className="text-green-300">Fresh Strawberry</h1>
          <p className="flex text-red-400">
            <IoMdStar />
            <IoMdStar />
            <IoMdStar />
            <IoMdStar />
            <IoMdStarHalf />
          </p>
          <p>$17.00</p>
          <button className="text-xs hover:bg-sky-700 w-[150px] bg-red-400 text-green-300 p-[15px] rounded-[10px]">
            Order Now
          </button>
        </div>
        <div className="flex flex-col justify-center items-center gap-3 shadow-2xl shadow-slate-500 w-[300px] h-[400px]">
          <img src={product2} alt="image2" />
          <h1 className="text-green-300">Fortune Sunflower Oil</h1>
          <p className="flex text-red-400">
            <IoMdStar />
            <IoMdStar />
            <IoMdStar />
            <IoMdStar />
            <IoMdStarHalf />
          </p>
          <p>$10.00</p>
          <button className="text-xs hover:bg-sky-700 w-[150px] bg-red-400 text-green-300 p-[15px] rounded-[10px]">
            Order Now
          </button>
        </div>
        <div className="flex flex-col justify-center items-center gap-3 shadow-2xl shadow-slate-500 w-[300px] h-[400px]">
          <img src={product3} alt="image3" />
          <h1 className="text-green-300">Fortune Sunflower Oil</h1>
          <p className="flex text-red-400">
            <IoMdStar />
            <IoMdStar />
            <IoMdStar />
            <IoMdStar />
            <IoMdStarHalf />
          </p>
          <p>$10.00</p>
          <button className="text-xs hover:bg-sky-700 w-[150px] bg-red-400 text-green-300 p-[15px] rounded-[10px]">
            Order Now
          </button>
        </div>
        <div className="flex flex-col justify-center items-center gap-3 shadow-2xl shadow-slate-500 w-[300px] h-[400px]">
          <img src={product4} alt="image4" />
          <h1 className="text-green-300">Fresh Mushroom</h1>
          <p className="flex text-red-400">
            <IoMdStar />
            <IoMdStar />
            <IoMdStar />
            <IoMdStar />
            <IoMdStarHalf />
          </p>
          <p>$11.00</p>
          <button className="text-xs hover:bg-sky-700 w-[150px] bg-red-400 text-green-300 p-[15px] rounded-[10px]">
            Order Now
          </button>
        </div>
      </div>
      <div className="flex bg-red-100 w-full h-[250px] gap-[150px] justify-center items-center ">
        <h1 className="font-bold text-5xl">Get 25% Off On Your First Purchase...!</h1>
        <button className="text-xl p-4 w-[200px] hover:bg-sky-700 bg-red-400 text-green-300 flex justify-around items-center gap-2 rounded-[10px]">
            <MdOutlineShoppingCartCheckout />
            Add to cart
          </button>
      </div>
      <div>
        <h1 className="text-center bg-green-100 h-[70px] flex justify-center items-center">Try It For Free. No Registration Needed.</h1>
      </div>
    </div>
  );
}

export default Bestselling;
