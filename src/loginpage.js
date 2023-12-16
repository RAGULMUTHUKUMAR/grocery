import React from "react";
import { Link } from "react-router-dom";

function Loginpage() {
  return (
    <div className="flex justify-center items-center w-full h-[100vh]">
      <div className="flex flex-col justify-center items-center w-[500px] h-[500px] gap-[20px] shadow-black shadow-2xl ">
        <h1 className="text-red-400 text-4xl  font-bold">EaSy2FaSt</h1>
        <div className="flex flex-col">
          <h1 className="text-green-300 text-3xl pt-5  font-bold">LOG IN</h1>
          <p className="text-xs text-gray-600">Enter your Email and password to login our Shopping</p>
        </div>
        <div>
          <h1>Email</h1>
          <input className="p-1 border-solid border-2 border-green-300" placeholder="Enter Your Email"></input>
        </div>
        <div>
          <h1>Password</h1>
          <input className="p-1 border-solid border-2 border-green-300 " placeholder="Enter Your Password"></input>
          <p className="text-xs">Forget password?</p>
        </div>
        <Link to="Header">
        <button className="text-xs hover:bg-sky-700 bg-red-400 text-green-300 w-[150px] rounded-[8px] p-2">
          Sign in
        </button>
        </Link>
        
        <div className="text-xs">
          <p>Don't have an account? <a href=" ">Sign up</a> </p>
          
        </div>
      </div>
    </div>
  );
}

export default Loginpage;
