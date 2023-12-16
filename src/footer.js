import React from "react";
import { RiInstagramLine } from "react-icons/ri";
import { IoLogoWhatsapp } from "react-icons/io5";
import { TiSocialGooglePlus } from "react-icons/ti";
import { FaFacebookSquare } from "react-icons/fa";

function Footer() {
  return (
    <div>
      <section className="flex mt-[60px] text-center w-full justify-center items-center p-3 gap-2">
        <h1 className="text-red-400 text-2xl  font-medium">Sign Up For Our Newsletter Email</h1>
        <input className="  border p-2 text-green-300" placeholder="Enter Your Email"></input><span><button className=" hover:bg-sky-700 w-[200px] bg-red-400 text-green-300 p-2 ">SUBSCRIBE NOW</button></span>
      </section>
      <footer className=" bg-green-300">
      <div className="w-ful grid grid-cols-3  place-items-center h-[500px] bg-green-300 my-10">
        {/* <h1 className="text-red-400 text-2xl ml-6 p-3 tracking-tighter">EaSy2FaSt</h1> */}
        <div>
            <h1 className=" text-red-400 font-bold">INFORMATION</h1>
            <ol className="flex flex-col gap-[20px] mt-2">
                <li className="font-medium hover:text-sky-700"><a href=" ">Home</a></li>
                <li className="font-medium hover:text-sky-700"><a href=" ">About Us</a></li>
                <li className="font-medium hover:text-sky-700"><a href=" ">Contact</a></li>
                <li className="font-medium hover:text-sky-700"><a href=" ">Services</a></li>
            </ol>
        </div>
        <div className="mb-[60px]">
            <h1 className=" text-red-400 font-bold">POLICY INFO</h1>
            <ul className="flex flex-col gap-[20px] mt-2">
                <li className="font-medium hover:text-sky-700"><a href=" ">FAQ</a></li>
                <li className="font-medium hover:text-sky-700"><a href=" ">Privacy Policy</a></li>
                <li className="font-medium hover:text-sky-700"><a href=" ">Terms Of Use</a></li>
            </ul>
        </div>
        <div className=" mb-[60px]">
            <h1 className=" text-red-400 font-bold">WHAT IN STORES</h1>
            <ul className="flex flex-col gap-[20px] mt-2">
                <li className="font-medium hover:text-sky-700"><a href=" ">Kitchen</a></li>
                <li className="font-medium hover:text-sky-700"><a href=" ">Frozen Snacks</a></li>
                <li className="font-medium hover:text-sky-700"><a href=" ">Branded Foods</a></li>
            </ul>
        </div>
        <h1 className="font-bold"> Connect With Us</h1><span className="flex gap-5 text-2xl mr-[800px]"><RiInstagramLine /><IoLogoWhatsapp /><TiSocialGooglePlus /><FaFacebookSquare /></span>
       
      </div>
      <h1 className="w-[70%] h-[2px] flex justify-center items-center ml-[300px] bg-red-400 " > </h1>
      <h1 className="text-red-400 text-sm text-center p-10 font-bold">© 2023 Grocery Store. All rights reserved | Design by RAGUL M</h1>
      </footer>
    </div>
  );
}

export default Footer;
