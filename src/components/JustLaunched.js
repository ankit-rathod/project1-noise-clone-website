import React, { useContext } from 'react'
import { Context } from '../Pages/MyContext'
import { useNavigate } from 'react-router-dom'

function JustLaunched() {
  const navigate=useNavigate()
  const {productData}=useContext(Context)
  let list=productData.map((i,index)=>index)
  let num1=Math.floor(Math.random() * (Math.floor(productData.length/4) - 0) + 0)
  let num2=Math.floor(Math.random() * (Math.floor(productData.length/3) - 4) + 4)
  let num3=Math.floor(Math.random() * (Math.floor(productData.length/2) - 8) + 8)
  let num4=Math.floor(Math.random() * (Math.floor(productData.length/1) - 13) + 13)

  return (
    <div className='h-[100vh] w-[100%] border border-b-1 bg-[#FBFBFB]'>
    <div className='pl-[50px] w-[100%] border justify-between flex gap-10 items-center h-[11vh]'>
       <div className='w-[40%] flex gap-6 jusy items-center'>
         <label className='text-[24px] font-bold'>Just Launched </label>
       <label className='text-blue-500'>View all {">"}</label></div>

       <div className='flex w-[25%]  h-[11vh] justi items-center '>
        <div className='border w-[50%] text-[20px] cursor-pointer flex justify-center items-center h-[11vh]'>Steal Deals</div>
        <div className='border w-[50%] text-[20px] cursor-pointer flex justify-center items-center h-[11vh]'>Headphones</div>
       </div>
    </div>
    <div className='h-[89vh] gap-4 w-[100%] flex justify-center items-center '>
{productData.map((i,index)=>
(index==num1||index==num2||index==num3||index==num4) &&
        <div  onClick={()=>navigate("/allProduct")} className='w-[23%] border h-[75vh] bg-white'>

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
                <label className='text-[20px] flex justify-between font-bold'><label>Rs {i.originalPrice-Math.floor(i.originalPrice*(i.discount/100))}/- </label><label>4.2</label></label>
            </div>

        </div>
        )}
        
    </div>
</div>
  )
}

export default JustLaunched