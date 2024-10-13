import React, { useContext, useEffect } from 'react'
import { Context } from '../Pages/MyContext'
import { list } from 'postcss'
import { useNavigate } from 'react-router-dom'

function HotSelling() {
    const navigate=useNavigate()
    const {productData}=useContext(Context)

    
  return (
    <div className='h-[100vh]  w-[100%] bg-[#FBFBFB]'>
        <div className='pl-[50px] w-[100%] border flex gap-10 items-center h-[11vh]'>
            <label className='text-[24px] font-bold'>Hot-Selling Gadgets</label>
            <label className='text-blue-500'>View all {">"}</label>
        </div>
   
 
        <div className='h-[89vh] gap-4 w-[100%]  flex justify-center items-center '>
        {productData.map((i,index)=>
        index<4 &&
            
            <div onClick={()=>navigate("/allProduct")} className='w-[23%] border h-[75vh] bg-white'>

                <div className='w-[100%] h-[48vh] relative bg-[#F4F4F4] flex justify-center items-center'>
                    <label className='absolute left-2 font-bold text-[18px] text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500 top-0'>SUPER SAVER</label>
                    <img className='h-[40vh]' src={i.images[0]}></img>
                </div>

                <div className='flex justify-around h-[25vh] mx-4 flex-col'>
                    <label className='text-[18px] font-bold'>{i.title}</label>
                    <label className='text-[15px] text-gray-600 '>{i.category}</label>
                    <label className='flex gap-1 '>
                        <div className='h-[20px] w-[20px] rounded-full bg-black'></div>
                        <div className='h-[20px] w-[20px] rounded-full bg-[#604939]'></div>
                        <div className='h-[20px] w-[20px] rounded-full bg-[#a5a2a0]'></div>
                        <div className='h-[20px] w-[20px] rounded-full bg-[#e47f37]'></div>
                    </label>
                    <label className='text-[20px] flex justify-between font-bold'><label>Rs {i.originalPrice-Math.floor(i.originalPrice*(i.discount/100))}/- <span  className='text-gray-400 text-[14px] line-through	'>Rs {i.originalPrice}/-</span> </label><label>4.2</label></label>
                </div>
            </div>
           
        )}    
        </div>

    </div>
  )
}

export default HotSelling