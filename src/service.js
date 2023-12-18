import React from 'react'
import { TbTruckDelivery } from "react-icons/tb";
import { IoTicketSharp } from "react-icons/io5";
import { FaRecycle } from "react-icons/fa";
import { LiaCertificateSolid } from "react-icons/lia";

function Service() {
  return (
    <div>
        <div className='flex justify-around items-center w-full h-[250px] bg-red-100  p-5 '>
            <div className='flex flex-col justify-center items-center bg-green-200 w-[250px] h-[150px] rounded-xl shadow-2xl shadow-slate-500'>
                <TbTruckDelivery className='text-red-400 text-5xl font-bold'/>
                <h1 className='text-red-400 text-1xl font-bold'>Free Shipping</h1>
                <p className='text-red-400 font-normal'>Above $5 Only</p>
            </div>
            <div className='flex flex-col justify-center items-center bg-green-200 w-[250px] h-[150px] rounded-xl shadow-2xl shadow-slate-500'>
                <LiaCertificateSolid className='text-red-400 text-5xl font-bold'/>
                <h1 className='text-red-400 text-1xl font-bold'>Certified Organic</h1>
                <p className='text-red-400 font-normal'>100% Guarantee</p>
            </div>
            <div className='flex flex-col justify-center items-center bg-green-200 w-[250px] h-[150px] rounded-xl shadow-2xl shadow-slate-500'>
                <IoTicketSharp className='text-red-400 text-[50px] font-bold'/>
                <h1  className='text-red-400 text-1xl font-bold'>Huge Savings</h1>
                <p className='text-red-400 font-normal'>At Lowest Price</p>
            </div>
            <div className='flex flex-col justify-center items-center bg-green-200 w-[250px] h-[150px] rounded-xl shadow-2xl shadow-slate-500'>
                <FaRecycle className='text-red-400 text-5xl font-bold'/>
                <h1  className='text-red-400 text-1xl font-bold'>Easy Returns</h1>
                <p className='text-red-400 font-normal'>No Questions Asked</p>
            </div>
        </div>
        
      
    </div>
  )
}

export default Service